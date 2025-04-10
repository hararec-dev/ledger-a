------------------------------------------
-- Tablas de Eventos (Core del Event Sourcing)
------------------------------------------
-- Tabla de Eventos
CREATE TABLE events_store (
  event_id      INTEGER PRIMARY KEY AUTOINCREMENT,
  aggregate_id  TEXT NOT NULL,      -- Identificador único del agregado (ej. cuenta, transacción)
  aggregate_type TEXT NOT NULL,     -- Tipo de agregado: 'Account', 'Transaction', 'Category', etc.
  event_type    TEXT NOT NULL,      -- Tipo de evento (ej. 'AccountCreated', 'TransactionAdded', etc.)
  event_data    TEXT NOT NULL,      -- Datos en formato JSON con los detalles del cambio
  event_timestamp_at DATETIME DEFAULT CURRENT_TIMESTAMP, -- Momento en que se produjo el evento
  version       INTEGER NOT NULL,   -- Versión del agregado (para garantizar la secuencia)
  CONSTRAINT unique_aggregate_event UNIQUE (aggregate_id, version)
);

------------------------------------------
-- Tablas de Snapshots (Proyecciones actuales)
------------------------------------------
-- Tabla de Snapshots
CREATE TABLE snapshots (
  snapshot_id      INTEGER PRIMARY KEY AUTOINCREMENT,
  aggregate_id     TEXT NOT NULL,
  aggregate_type   TEXT NOT NULL,
  snapshot_data    TEXT NOT NULL,      -- Estado completo del agregado (en JSON u otro formato)
  snapshot_timestamp_at DATETIME DEFAULT CURRENT_TIMESTAMP, -- Momento del snapshot
  version          INTEGER NOT NULL,   -- La versión hasta la que se calculó el snapshot
  CONSTRAINT unique_snapshot UNIQUE (aggregate_id, version)
);

------------------------------------------
-- Tablas de Proyección (Datos estáticos/mutable)
------------------------------------------
-- Tabla de Cuentas
CREATE TABLE personal_accounts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    type TEXT CHECK(type IN ('cash', 'credit_card', 'debit_card', 'digital_wallet', 'bank_account', 'crypto')),
    currency_code TEXT DEFAULT 'USD',
    initial_balance REAL DEFAULT 0,
    current_balance REAL DEFAULT 0,
    emoji TEXT,
    color TEXT DEFAULT '#007AFF',
    is_active BOOLEAN DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de categorías
CREATE TABLE personal_categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    icon TEXT,
    color TEXT DEFAULT '#808080',
    type TEXT CHECK(type IN ('income', 'expense', 'transfer')),
    parent_category_id INTEGER REFERENCES personal_categories(id),
    is_system BOOLEAN DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de etiquetas
CREATE TABLE tags (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    emoji TEXT,
    color TEXT DEFAULT '#808080',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabla principal de transacciones
CREATE TABLE personal_transactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    account_id INTEGER NOT NULL REFERENCES personal_accounts(id),
    category_id INTEGER REFERENCES personal_categories(id),
    amount REAL NOT NULL,
    type TEXT CHECK(type IN ('income', 'expense')),
    date_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    description TEXT,
    is_recurring BOOLEAN DEFAULT 0,
    transfer_id INTEGER REFERENCES personal_transfers(id),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de relación transacciones-etiquetas
CREATE TABLE personal_transaction_tags (
    transaction_id INTEGER NOT NULL REFERENCES personal_transactions(id),
    tag_id INTEGER NOT NULL REFERENCES tags(id),
    PRIMARY KEY (transaction_id, tag_id)
);

-- Tabla de transferencias entre cuentas
CREATE TABLE personal_transfers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    from_account_id INTEGER NOT NULL REFERENCES personal_accounts(id),
    to_account_id INTEGER NOT NULL REFERENCES personal_accounts(id),
    amount REAL NOT NULL,
    date_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de presupuestos
CREATE TABLE personal_budgets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category_id INTEGER REFERENCES personal_categories(id),
    account_id INTEGER REFERENCES personal_accounts(id),
    amount REAL NOT NULL,
    period TEXT CHECK(period IN ('weekly', 'monthly', 'yearly')),
    start_date_at DATETIME,
    end_date_at DATETIME,
    alert_threshold REAL DEFAULT 0.8,
    spent_amount REAL DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    CHECK (category_id IS NOT NULL OR account_id IS NOT NULL)
);

-- Tabla de pagos recurrentes
CREATE TABLE personal_recurring_payments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    account_id INTEGER NOT NULL REFERENCES personal_accounts(id),
    category_id INTEGER REFERENCES personal_categories(id),
    amount REAL NOT NULL,
    type TEXT CHECK(type IN ('income', 'expense')),
    description TEXT,
    recurrence TEXT CHECK(recurrence IN ('daily', 'weekly', 'monthly', 'yearly')),
    due_date_at DATETIME,
    is_active BOOLEAN DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de desafíos
CREATE TABLE personal_challenges (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    target_amount REAL NOT NULL,
    start_date_at DATETIME,
    end_date_at DATETIME,
    current_amount REAL DEFAULT 0,
    is_completed BOOLEAN DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de logros
CREATE TABLE personal_achievements (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    condition TEXT NOT NULL,
    is_unlocked BOOLEAN DEFAULT 0,
    unlocked_date_at DATETIME,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de configuración
CREATE TABLE settings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    default_currency TEXT DEFAULT 'USD',
    theme TEXT CHECK(theme IN ('light', 'dark', 'oled', 'custom')),
    security_pin_hash TEXT,
    is_biometrics_enabled BOOLEAN DEFAULT 0,
    is_stealth_mode BOOLEAN DEFAULT 0,
    backup_frequency TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de reglas de autocategorización
CREATE TABLE personal_auto_category_rules (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category_id INTEGER NOT NULL REFERENCES personal_categories(id),
    keyword TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de suscripciones
CREATE TABLE personal_subscriptions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    amount REAL NOT NULL,
    due_date_at DATETIME,
    recurrence TEXT CHECK(recurrence IN ('monthly', 'quarterly', 'annual')),
    category_id INTEGER REFERENCES personal_categories(id),
    account_id INTEGER REFERENCES personal_accounts(id),
    is_active BOOLEAN DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de tasas de cambio
CREATE TABLE exchange_rates (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    from_currency TEXT NOT NULL,
    to_currency TEXT NOT NULL,
    rate REAL NOT NULL,
    date_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de conexiones bancarias
CREATE TABLE personal_connected_banks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    bank_name TEXT NOT NULL,
    account_number TEXT,
    access_token TEXT,
    last_sync_at DATETIME,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Índices importantes
CREATE INDEX idx_transactions_date ON personal_transactions(date_at);
CREATE INDEX idx_transfers_date ON personal_transfers(date_at);
CREATE INDEX idx_budgets_period ON personal_budgets(start_date_at, end_date_at);
CREATE UNIQUE INDEX idx_autocategory_unique ON personal_auto_category_rules(category_id, keyword);

