// Generated from dt-sql-parser/src/grammar/iotdb-tree/IdentifierParser.g4 by ANTLR 4.13.1

// @ts-nocheck

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { IdentifierParserListener } from "./IdentifierParserListener.js";
import { IdentifierParserVisitor } from "./IdentifierParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class IdentifierParser extends antlr.Parser {
    public static readonly WS = 1;
    public static readonly ACTIVATE = 2;
    public static readonly ACTIVATION = 3;
    public static readonly ADD = 4;
    public static readonly AFTER = 5;
    public static readonly ALIAS = 6;
    public static readonly ALIGN = 7;
    public static readonly ALIGNED = 8;
    public static readonly ALL = 9;
    public static readonly READ = 10;
    public static readonly WRITE = 11;
    public static readonly ALTER = 12;
    public static readonly ANALYZE = 13;
    public static readonly AND = 14;
    public static readonly ANY = 15;
    public static readonly APPEND = 16;
    public static readonly AS = 17;
    public static readonly ASC = 18;
    public static readonly ATTRIBUTES = 19;
    public static readonly BEFORE = 20;
    public static readonly BEGIN = 21;
    public static readonly BETWEEN = 22;
    public static readonly BLOCKED = 23;
    public static readonly BOUNDARY = 24;
    public static readonly BY = 25;
    public static readonly CACHE = 26;
    public static readonly CALL = 27;
    public static readonly CAST = 28;
    public static readonly CHILD = 29;
    public static readonly CLEAR = 30;
    public static readonly CLUSTER = 31;
    public static readonly CLUSTERID = 32;
    public static readonly COMMENT = 33;
    public static readonly CONCAT = 34;
    public static readonly CONDITION = 35;
    public static readonly CONFIGNODES = 36;
    public static readonly CONFIGNODE = 37;
    public static readonly CONFIGURATION = 38;
    public static readonly CONNECTION = 39;
    public static readonly CONNECTOR = 40;
    public static readonly CONTAIN = 41;
    public static readonly CONTAINS = 42;
    public static readonly CONTINUOUS = 43;
    public static readonly COUNT = 44;
    public static readonly CQ = 45;
    public static readonly CQS = 46;
    public static readonly CREATE = 47;
    public static readonly CURRENT_SQL_DIALECT = 48;
    public static readonly CURRENT_USER = 49;
    public static readonly DATA = 50;
    public static readonly DATABASE = 51;
    public static readonly DATABASES = 52;
    public static readonly DATANODE = 53;
    public static readonly DATANODEID = 54;
    public static readonly DATANODES = 55;
    public static readonly DATASET = 56;
    public static readonly DEACTIVATE = 57;
    public static readonly DEBUG = 58;
    public static readonly DELETE = 59;
    public static readonly DEFAULT = 60;
    public static readonly DESC = 61;
    public static readonly DESCRIBE = 62;
    public static readonly DETAILS = 63;
    public static readonly DEVICE = 64;
    public static readonly DEVICES = 65;
    public static readonly DISABLE = 66;
    public static readonly DISCARD = 67;
    public static readonly DROP = 68;
    public static readonly ELAPSEDTIME = 69;
    public static readonly END = 70;
    public static readonly ENDTIME = 71;
    public static readonly ESCAPE = 72;
    public static readonly EVERY = 73;
    public static readonly EXISTS = 74;
    public static readonly EXPLAIN = 75;
    public static readonly EXTEND = 76;
    public static readonly EXTRACTOR = 77;
    public static readonly FALSE = 78;
    public static readonly FIELD = 79;
    public static readonly FILL = 80;
    public static readonly FILE = 81;
    public static readonly FIRST = 82;
    public static readonly FLUSH = 83;
    public static readonly FOR = 84;
    public static readonly FROM = 85;
    public static readonly FULL = 86;
    public static readonly FUNCTION = 87;
    public static readonly FUNCTIONS = 88;
    public static readonly GLOBAL = 89;
    public static readonly GRANT = 90;
    public static readonly OPTION = 91;
    public static readonly GROUP = 92;
    public static readonly HAVING = 93;
    public static readonly HEAD = 94;
    public static readonly HYPERPARAMETERS = 95;
    public static readonly IN = 96;
    public static readonly INDEX = 97;
    public static readonly INFERENCE = 98;
    public static readonly INFO = 99;
    public static readonly INSERT = 100;
    public static readonly INTO = 101;
    public static readonly IS = 102;
    public static readonly KILL = 103;
    public static readonly LABEL = 104;
    public static readonly LAST = 105;
    public static readonly LATEST = 106;
    public static readonly LEVEL = 107;
    public static readonly LIKE = 108;
    public static readonly LIMIT = 109;
    public static readonly LINEAR = 110;
    public static readonly LINK = 111;
    public static readonly LIST = 112;
    public static readonly LOAD = 113;
    public static readonly LOCAL = 114;
    public static readonly LOCK = 115;
    public static readonly MERGE = 116;
    public static readonly METADATA = 117;
    public static readonly MIGRATE = 118;
    public static readonly AINODE = 119;
    public static readonly AINODES = 120;
    public static readonly MODEL = 121;
    public static readonly MODELS = 122;
    public static readonly MODIFY = 123;
    public static readonly NAN = 124;
    public static readonly NODEID = 125;
    public static readonly NODES = 126;
    public static readonly NONE = 127;
    public static readonly NOT = 128;
    public static readonly NOW = 129;
    public static readonly NULL = 130;
    public static readonly NULLS = 131;
    public static readonly OF = 132;
    public static readonly OFF = 133;
    public static readonly OFFSET = 134;
    public static readonly ON = 135;
    public static readonly OPTIONS = 136;
    public static readonly OR = 137;
    public static readonly ORDER = 138;
    public static readonly ONSUCCESS = 139;
    public static readonly PARTITION = 140;
    public static readonly PASSWORD = 141;
    public static readonly PATH = 142;
    public static readonly PATHS = 143;
    public static readonly PIPE = 144;
    public static readonly PIPES = 145;
    public static readonly PIPESINK = 146;
    public static readonly PIPESINKS = 147;
    public static readonly PIPESINKTYPE = 148;
    public static readonly PIPEPLUGIN = 149;
    public static readonly PIPEPLUGINS = 150;
    public static readonly POLICY = 151;
    public static readonly PREVIOUS = 152;
    public static readonly PREVIOUSUNTILLAST = 153;
    public static readonly PRIVILEGES = 154;
    public static readonly PROCESSLIST = 155;
    public static readonly PROCESSOR = 156;
    public static readonly PROPERTY = 157;
    public static readonly PRUNE = 158;
    public static readonly QUERIES = 159;
    public static readonly QUERY = 160;
    public static readonly QUERYID = 161;
    public static readonly QUOTA = 162;
    public static readonly RANGE = 163;
    public static readonly READONLY = 164;
    public static readonly RECONSTRUCT = 165;
    public static readonly REGEXP = 166;
    public static readonly REGION = 167;
    public static readonly REGIONID = 168;
    public static readonly REGIONS = 169;
    public static readonly REMOVE = 170;
    public static readonly RENAME = 171;
    public static readonly RESAMPLE = 172;
    public static readonly RESOURCE = 173;
    public static readonly REPLACE = 174;
    public static readonly RESTRICT = 175;
    public static readonly REVOKE = 176;
    public static readonly ROLE = 177;
    public static readonly ROOT = 178;
    public static readonly ROUND = 179;
    public static readonly RUNNING = 180;
    public static readonly SCHEMA = 181;
    public static readonly SELECT = 182;
    public static readonly SERIESSLOTID = 183;
    public static readonly SESSION = 184;
    public static readonly SET = 185;
    public static readonly SETTLE = 186;
    public static readonly SGLEVEL = 187;
    public static readonly SHOW = 188;
    public static readonly SINK = 189;
    public static readonly SLIMIT = 190;
    public static readonly SOFFSET = 191;
    public static readonly SOURCE = 192;
    public static readonly SPACE = 193;
    public static readonly SQL_DIALECT = 194;
    public static readonly STORAGE = 195;
    public static readonly START = 196;
    public static readonly STARTTIME = 197;
    public static readonly STATEFUL = 198;
    public static readonly STATELESS = 199;
    public static readonly STATEMENT = 200;
    public static readonly STOP = 201;
    public static readonly SUBSCRIPTION = 202;
    public static readonly SUBSCRIPTIONS = 203;
    public static readonly SUBSTRING = 204;
    public static readonly SYSTEM = 205;
    public static readonly TABLE = 206;
    public static readonly TAG = 207;
    public static readonly TAGS = 208;
    public static readonly TAIL = 209;
    public static readonly TASK = 210;
    public static readonly TEMPLATE = 211;
    public static readonly TEMPLATES = 212;
    public static readonly THROTTLE = 213;
    public static readonly TIME = 214;
    public static readonly TIMEOUT = 215;
    public static readonly TIMESERIES = 216;
    public static readonly TIMESLOTID = 217;
    public static readonly TIMEPARTITION = 218;
    public static readonly TIMESTAMP = 219;
    public static readonly TO = 220;
    public static readonly TOLERANCE = 221;
    public static readonly TOP = 222;
    public static readonly TOPIC = 223;
    public static readonly TOPICS = 224;
    public static readonly TRACING = 225;
    public static readonly TREE = 226;
    public static readonly TRIALS = 227;
    public static readonly TRIGGER = 228;
    public static readonly TRIGGERS = 229;
    public static readonly TRUE = 230;
    public static readonly TTL = 231;
    public static readonly UNLINK = 232;
    public static readonly UNLOAD = 233;
    public static readonly UNSET = 234;
    public static readonly UPDATE = 235;
    public static readonly UPSERT = 236;
    public static readonly URI = 237;
    public static readonly USED = 238;
    public static readonly USER = 239;
    public static readonly USING = 240;
    public static readonly VALUES = 241;
    public static readonly VARIABLES = 242;
    public static readonly VARIATION = 243;
    public static readonly VERBOSE = 244;
    public static readonly VERIFY = 245;
    public static readonly VERSION = 246;
    public static readonly VIEW = 247;
    public static readonly WATERMARK_EMBEDDING = 248;
    public static readonly WHERE = 249;
    public static readonly WITH = 250;
    public static readonly WITHOUT = 251;
    public static readonly WRITABLE = 252;
    public static readonly CASE = 253;
    public static readonly WHEN = 254;
    public static readonly THEN = 255;
    public static readonly ELSE = 256;
    public static readonly IF = 257;
    public static readonly INF = 258;
    public static readonly PRIVILEGE_VALUE = 259;
    public static readonly READ_DATA = 260;
    public static readonly WRITE_DATA = 261;
    public static readonly READ_SCHEMA = 262;
    public static readonly WRITE_SCHEMA = 263;
    public static readonly MANAGE_USER = 264;
    public static readonly MANAGE_ROLE = 265;
    public static readonly USE_TRIGGER = 266;
    public static readonly USE_MODEL = 267;
    public static readonly USE_UDF = 268;
    public static readonly USE_CQ = 269;
    public static readonly USE_PIPE = 270;
    public static readonly EXTEND_TEMPLATE = 271;
    public static readonly MANAGE_DATABASE = 272;
    public static readonly MAINTAIN = 273;
    public static readonly REPAIR = 274;
    public static readonly SCHEMA_REPLICATION_FACTOR = 275;
    public static readonly DATA_REPLICATION_FACTOR = 276;
    public static readonly TIME_PARTITION_INTERVAL = 277;
    public static readonly SCHEMA_REGION_GROUP_NUM = 278;
    public static readonly DATA_REGION_GROUP_NUM = 279;
    public static readonly CURRENT_TIMESTAMP = 280;
    public static readonly MINUS = 281;
    public static readonly PLUS = 282;
    public static readonly DIV = 283;
    public static readonly MOD = 284;
    public static readonly OPERATOR_DEQ = 285;
    public static readonly OPERATOR_SEQ = 286;
    public static readonly OPERATOR_GT = 287;
    public static readonly OPERATOR_GTE = 288;
    public static readonly OPERATOR_LT = 289;
    public static readonly OPERATOR_LTE = 290;
    public static readonly OPERATOR_NEQ = 291;
    public static readonly OPERATOR_BITWISE_AND = 292;
    public static readonly OPERATOR_LOGICAL_AND = 293;
    public static readonly OPERATOR_BITWISE_OR = 294;
    public static readonly OPERATOR_LOGICAL_OR = 295;
    public static readonly OPERATOR_NOT = 296;
    public static readonly DOT = 297;
    public static readonly COMMA = 298;
    public static readonly SEMI = 299;
    public static readonly STAR = 300;
    public static readonly DOUBLE_STAR = 301;
    public static readonly LR_BRACKET = 302;
    public static readonly RR_BRACKET = 303;
    public static readonly LS_BRACKET = 304;
    public static readonly RS_BRACKET = 305;
    public static readonly DOUBLE_COLON = 306;
    public static readonly STRING_LITERAL = 307;
    public static readonly BINARY_LITERAL = 308;
    public static readonly DURATION_LITERAL = 309;
    public static readonly DATETIME_LITERAL = 310;
    public static readonly INTEGER_LITERAL = 311;
    public static readonly EXPONENT_NUM_PART = 312;
    public static readonly ID = 313;
    public static readonly QUOTED_ID = 314;
    public static readonly AUDIT = 315;
    public static readonly RULE_identifier = 0;
    public static readonly RULE_keyWords = 1;

    public static readonly literalNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, "'-'", "'+'", "'/'", "'%'", 
        "'=='", "'='", "'>'", "'>='", "'<'", "'<='", null, "'&'", "'&&'", 
        "'|'", "'||'", "'!'", "'.'", "','", "';'", "'*'", "'**'", "'('", 
        "')'", "'['", "']'", "'::'"
    ];

    public static readonly symbolicNames = [
        null, "WS", "ACTIVATE", "ACTIVATION", "ADD", "AFTER", "ALIAS", "ALIGN", 
        "ALIGNED", "ALL", "READ", "WRITE", "ALTER", "ANALYZE", "AND", "ANY", 
        "APPEND", "AS", "ASC", "ATTRIBUTES", "BEFORE", "BEGIN", "BETWEEN", 
        "BLOCKED", "BOUNDARY", "BY", "CACHE", "CALL", "CAST", "CHILD", "CLEAR", 
        "CLUSTER", "CLUSTERID", "COMMENT", "CONCAT", "CONDITION", "CONFIGNODES", 
        "CONFIGNODE", "CONFIGURATION", "CONNECTION", "CONNECTOR", "CONTAIN", 
        "CONTAINS", "CONTINUOUS", "COUNT", "CQ", "CQS", "CREATE", "CURRENT_SQL_DIALECT", 
        "CURRENT_USER", "DATA", "DATABASE", "DATABASES", "DATANODE", "DATANODEID", 
        "DATANODES", "DATASET", "DEACTIVATE", "DEBUG", "DELETE", "DEFAULT", 
        "DESC", "DESCRIBE", "DETAILS", "DEVICE", "DEVICES", "DISABLE", "DISCARD", 
        "DROP", "ELAPSEDTIME", "END", "ENDTIME", "ESCAPE", "EVERY", "EXISTS", 
        "EXPLAIN", "EXTEND", "EXTRACTOR", "FALSE", "FIELD", "FILL", "FILE", 
        "FIRST", "FLUSH", "FOR", "FROM", "FULL", "FUNCTION", "FUNCTIONS", 
        "GLOBAL", "GRANT", "OPTION", "GROUP", "HAVING", "HEAD", "HYPERPARAMETERS", 
        "IN", "INDEX", "INFERENCE", "INFO", "INSERT", "INTO", "IS", "KILL", 
        "LABEL", "LAST", "LATEST", "LEVEL", "LIKE", "LIMIT", "LINEAR", "LINK", 
        "LIST", "LOAD", "LOCAL", "LOCK", "MERGE", "METADATA", "MIGRATE", 
        "AINODE", "AINODES", "MODEL", "MODELS", "MODIFY", "NAN", "NODEID", 
        "NODES", "NONE", "NOT", "NOW", "NULL", "NULLS", "OF", "OFF", "OFFSET", 
        "ON", "OPTIONS", "OR", "ORDER", "ONSUCCESS", "PARTITION", "PASSWORD", 
        "PATH", "PATHS", "PIPE", "PIPES", "PIPESINK", "PIPESINKS", "PIPESINKTYPE", 
        "PIPEPLUGIN", "PIPEPLUGINS", "POLICY", "PREVIOUS", "PREVIOUSUNTILLAST", 
        "PRIVILEGES", "PROCESSLIST", "PROCESSOR", "PROPERTY", "PRUNE", "QUERIES", 
        "QUERY", "QUERYID", "QUOTA", "RANGE", "READONLY", "RECONSTRUCT", 
        "REGEXP", "REGION", "REGIONID", "REGIONS", "REMOVE", "RENAME", "RESAMPLE", 
        "RESOURCE", "REPLACE", "RESTRICT", "REVOKE", "ROLE", "ROOT", "ROUND", 
        "RUNNING", "SCHEMA", "SELECT", "SERIESSLOTID", "SESSION", "SET", 
        "SETTLE", "SGLEVEL", "SHOW", "SINK", "SLIMIT", "SOFFSET", "SOURCE", 
        "SPACE", "SQL_DIALECT", "STORAGE", "START", "STARTTIME", "STATEFUL", 
        "STATELESS", "STATEMENT", "STOP", "SUBSCRIPTION", "SUBSCRIPTIONS", 
        "SUBSTRING", "SYSTEM", "TABLE", "TAG", "TAGS", "TAIL", "TASK", "TEMPLATE", 
        "TEMPLATES", "THROTTLE", "TIME", "TIMEOUT", "TIMESERIES", "TIMESLOTID", 
        "TIMEPARTITION", "TIMESTAMP", "TO", "TOLERANCE", "TOP", "TOPIC", 
        "TOPICS", "TRACING", "TREE", "TRIALS", "TRIGGER", "TRIGGERS", "TRUE", 
        "TTL", "UNLINK", "UNLOAD", "UNSET", "UPDATE", "UPSERT", "URI", "USED", 
        "USER", "USING", "VALUES", "VARIABLES", "VARIATION", "VERBOSE", 
        "VERIFY", "VERSION", "VIEW", "WATERMARK_EMBEDDING", "WHERE", "WITH", 
        "WITHOUT", "WRITABLE", "CASE", "WHEN", "THEN", "ELSE", "IF", "INF", 
        "PRIVILEGE_VALUE", "READ_DATA", "WRITE_DATA", "READ_SCHEMA", "WRITE_SCHEMA", 
        "MANAGE_USER", "MANAGE_ROLE", "USE_TRIGGER", "USE_MODEL", "USE_UDF", 
        "USE_CQ", "USE_PIPE", "EXTEND_TEMPLATE", "MANAGE_DATABASE", "MAINTAIN", 
        "REPAIR", "SCHEMA_REPLICATION_FACTOR", "DATA_REPLICATION_FACTOR", 
        "TIME_PARTITION_INTERVAL", "SCHEMA_REGION_GROUP_NUM", "DATA_REGION_GROUP_NUM", 
        "CURRENT_TIMESTAMP", "MINUS", "PLUS", "DIV", "MOD", "OPERATOR_DEQ", 
        "OPERATOR_SEQ", "OPERATOR_GT", "OPERATOR_GTE", "OPERATOR_LT", "OPERATOR_LTE", 
        "OPERATOR_NEQ", "OPERATOR_BITWISE_AND", "OPERATOR_LOGICAL_AND", 
        "OPERATOR_BITWISE_OR", "OPERATOR_LOGICAL_OR", "OPERATOR_NOT", "DOT", 
        "COMMA", "SEMI", "STAR", "DOUBLE_STAR", "LR_BRACKET", "RR_BRACKET", 
        "LS_BRACKET", "RS_BRACKET", "DOUBLE_COLON", "STRING_LITERAL", "BINARY_LITERAL", 
        "DURATION_LITERAL", "DATETIME_LITERAL", "INTEGER_LITERAL", "EXPONENT_NUM_PART", 
        "ID", "QUOTED_ID", "AUDIT"
    ];
    public static readonly ruleNames = [
        "identifier", "keyWords",
    ];

    public get grammarFileName(): string { return "IdentifierParser.g4"; }
    public get literalNames(): (string | null)[] { return IdentifierParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return IdentifierParser.symbolicNames; }
    public get ruleNames(): string[] { return IdentifierParser.ruleNames; }
    public get serializedATN(): number[] { return IdentifierParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, IdentifierParser._ATN, IdentifierParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public identifier(): IdentifierContext {
        let localContext = new IdentifierContext(this.context, this.state);
        this.enterRule(localContext, 0, IdentifierParser.RULE_identifier);
        try {
            this.state = 8;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case IdentifierParser.ADD:
            case IdentifierParser.AFTER:
            case IdentifierParser.ALIAS:
            case IdentifierParser.ALIGN:
            case IdentifierParser.ALIGNED:
            case IdentifierParser.ALL:
            case IdentifierParser.READ:
            case IdentifierParser.WRITE:
            case IdentifierParser.ALTER:
            case IdentifierParser.ANALYZE:
            case IdentifierParser.AND:
            case IdentifierParser.ANY:
            case IdentifierParser.APPEND:
            case IdentifierParser.AS:
            case IdentifierParser.ASC:
            case IdentifierParser.ATTRIBUTES:
            case IdentifierParser.BEFORE:
            case IdentifierParser.BEGIN:
            case IdentifierParser.BETWEEN:
            case IdentifierParser.BLOCKED:
            case IdentifierParser.BOUNDARY:
            case IdentifierParser.BY:
            case IdentifierParser.CACHE:
            case IdentifierParser.CALL:
            case IdentifierParser.CAST:
            case IdentifierParser.CHILD:
            case IdentifierParser.CLEAR:
            case IdentifierParser.CLUSTER:
            case IdentifierParser.CLUSTERID:
            case IdentifierParser.COMMENT:
            case IdentifierParser.CONCAT:
            case IdentifierParser.CONDITION:
            case IdentifierParser.CONFIGNODES:
            case IdentifierParser.CONFIGNODE:
            case IdentifierParser.CONFIGURATION:
            case IdentifierParser.CONNECTION:
            case IdentifierParser.CONNECTOR:
            case IdentifierParser.CONTAIN:
            case IdentifierParser.CONTAINS:
            case IdentifierParser.CONTINUOUS:
            case IdentifierParser.COUNT:
            case IdentifierParser.CQ:
            case IdentifierParser.CQS:
            case IdentifierParser.CREATE:
            case IdentifierParser.CURRENT_SQL_DIALECT:
            case IdentifierParser.CURRENT_USER:
            case IdentifierParser.DATA:
            case IdentifierParser.DATABASE:
            case IdentifierParser.DATABASES:
            case IdentifierParser.DATANODE:
            case IdentifierParser.DATANODEID:
            case IdentifierParser.DATANODES:
            case IdentifierParser.DATASET:
            case IdentifierParser.DEACTIVATE:
            case IdentifierParser.DEBUG:
            case IdentifierParser.DELETE:
            case IdentifierParser.DEFAULT:
            case IdentifierParser.DESC:
            case IdentifierParser.DESCRIBE:
            case IdentifierParser.DETAILS:
            case IdentifierParser.DEVICE:
            case IdentifierParser.DEVICES:
            case IdentifierParser.DISABLE:
            case IdentifierParser.DISCARD:
            case IdentifierParser.DROP:
            case IdentifierParser.ELAPSEDTIME:
            case IdentifierParser.END:
            case IdentifierParser.ENDTIME:
            case IdentifierParser.ESCAPE:
            case IdentifierParser.EVERY:
            case IdentifierParser.EXPLAIN:
            case IdentifierParser.EXTRACTOR:
            case IdentifierParser.FALSE:
            case IdentifierParser.FIELD:
            case IdentifierParser.FILL:
            case IdentifierParser.FILE:
            case IdentifierParser.FIRST:
            case IdentifierParser.FLUSH:
            case IdentifierParser.FOR:
            case IdentifierParser.FROM:
            case IdentifierParser.FULL:
            case IdentifierParser.FUNCTION:
            case IdentifierParser.FUNCTIONS:
            case IdentifierParser.GLOBAL:
            case IdentifierParser.GRANT:
            case IdentifierParser.OPTION:
            case IdentifierParser.GROUP:
            case IdentifierParser.HAVING:
            case IdentifierParser.HEAD:
            case IdentifierParser.HYPERPARAMETERS:
            case IdentifierParser.IN:
            case IdentifierParser.INDEX:
            case IdentifierParser.INFERENCE:
            case IdentifierParser.INFO:
            case IdentifierParser.INSERT:
            case IdentifierParser.INTO:
            case IdentifierParser.IS:
            case IdentifierParser.KILL:
            case IdentifierParser.LABEL:
            case IdentifierParser.LAST:
            case IdentifierParser.LATEST:
            case IdentifierParser.LEVEL:
            case IdentifierParser.LIKE:
            case IdentifierParser.LIMIT:
            case IdentifierParser.LINEAR:
            case IdentifierParser.LINK:
            case IdentifierParser.LIST:
            case IdentifierParser.LOAD:
            case IdentifierParser.LOCAL:
            case IdentifierParser.LOCK:
            case IdentifierParser.MERGE:
            case IdentifierParser.METADATA:
            case IdentifierParser.MIGRATE:
            case IdentifierParser.AINODES:
            case IdentifierParser.MODEL:
            case IdentifierParser.MODELS:
            case IdentifierParser.MODIFY:
            case IdentifierParser.NAN:
            case IdentifierParser.NODEID:
            case IdentifierParser.NODES:
            case IdentifierParser.NONE:
            case IdentifierParser.NOT:
            case IdentifierParser.NOW:
            case IdentifierParser.NULL:
            case IdentifierParser.NULLS:
            case IdentifierParser.OF:
            case IdentifierParser.OFF:
            case IdentifierParser.OFFSET:
            case IdentifierParser.ON:
            case IdentifierParser.OPTIONS:
            case IdentifierParser.OR:
            case IdentifierParser.ORDER:
            case IdentifierParser.ONSUCCESS:
            case IdentifierParser.PARTITION:
            case IdentifierParser.PASSWORD:
            case IdentifierParser.PATHS:
            case IdentifierParser.PIPE:
            case IdentifierParser.PIPES:
            case IdentifierParser.PIPESINK:
            case IdentifierParser.PIPESINKS:
            case IdentifierParser.PIPESINKTYPE:
            case IdentifierParser.PIPEPLUGIN:
            case IdentifierParser.PIPEPLUGINS:
            case IdentifierParser.POLICY:
            case IdentifierParser.PREVIOUS:
            case IdentifierParser.PREVIOUSUNTILLAST:
            case IdentifierParser.PRIVILEGES:
            case IdentifierParser.PROCESSLIST:
            case IdentifierParser.PROCESSOR:
            case IdentifierParser.PROPERTY:
            case IdentifierParser.PRUNE:
            case IdentifierParser.QUERIES:
            case IdentifierParser.QUERY:
            case IdentifierParser.QUERYID:
            case IdentifierParser.QUOTA:
            case IdentifierParser.RANGE:
            case IdentifierParser.READONLY:
            case IdentifierParser.REGEXP:
            case IdentifierParser.REGIONID:
            case IdentifierParser.REGIONS:
            case IdentifierParser.REMOVE:
            case IdentifierParser.RENAME:
            case IdentifierParser.RESAMPLE:
            case IdentifierParser.RESOURCE:
            case IdentifierParser.REPLACE:
            case IdentifierParser.RESTRICT:
            case IdentifierParser.REVOKE:
            case IdentifierParser.ROLE:
            case IdentifierParser.ROUND:
            case IdentifierParser.RUNNING:
            case IdentifierParser.SCHEMA:
            case IdentifierParser.SELECT:
            case IdentifierParser.SERIESSLOTID:
            case IdentifierParser.SESSION:
            case IdentifierParser.SET:
            case IdentifierParser.SETTLE:
            case IdentifierParser.SGLEVEL:
            case IdentifierParser.SHOW:
            case IdentifierParser.SINK:
            case IdentifierParser.SLIMIT:
            case IdentifierParser.SOFFSET:
            case IdentifierParser.SOURCE:
            case IdentifierParser.SPACE:
            case IdentifierParser.SQL_DIALECT:
            case IdentifierParser.STORAGE:
            case IdentifierParser.START:
            case IdentifierParser.STARTTIME:
            case IdentifierParser.STATEFUL:
            case IdentifierParser.STATELESS:
            case IdentifierParser.STATEMENT:
            case IdentifierParser.STOP:
            case IdentifierParser.SUBSCRIPTION:
            case IdentifierParser.SUBSCRIPTIONS:
            case IdentifierParser.SUBSTRING:
            case IdentifierParser.SYSTEM:
            case IdentifierParser.TABLE:
            case IdentifierParser.TAG:
            case IdentifierParser.TAGS:
            case IdentifierParser.TAIL:
            case IdentifierParser.TASK:
            case IdentifierParser.TEMPLATE:
            case IdentifierParser.TEMPLATES:
            case IdentifierParser.THROTTLE:
            case IdentifierParser.TIMEOUT:
            case IdentifierParser.TIMESERIES:
            case IdentifierParser.TIMESLOTID:
            case IdentifierParser.TIMEPARTITION:
            case IdentifierParser.TO:
            case IdentifierParser.TOLERANCE:
            case IdentifierParser.TOP:
            case IdentifierParser.TOPIC:
            case IdentifierParser.TOPICS:
            case IdentifierParser.TRACING:
            case IdentifierParser.TREE:
            case IdentifierParser.TRIALS:
            case IdentifierParser.TRIGGER:
            case IdentifierParser.TRIGGERS:
            case IdentifierParser.TRUE:
            case IdentifierParser.TTL:
            case IdentifierParser.UNLINK:
            case IdentifierParser.UNLOAD:
            case IdentifierParser.UNSET:
            case IdentifierParser.UPDATE:
            case IdentifierParser.UPSERT:
            case IdentifierParser.URI:
            case IdentifierParser.USED:
            case IdentifierParser.USER:
            case IdentifierParser.USING:
            case IdentifierParser.VALUES:
            case IdentifierParser.VARIABLES:
            case IdentifierParser.VARIATION:
            case IdentifierParser.VERIFY:
            case IdentifierParser.VERSION:
            case IdentifierParser.VIEW:
            case IdentifierParser.WATERMARK_EMBEDDING:
            case IdentifierParser.WHERE:
            case IdentifierParser.WITH:
            case IdentifierParser.WITHOUT:
            case IdentifierParser.WRITABLE:
            case IdentifierParser.CASE:
            case IdentifierParser.WHEN:
            case IdentifierParser.THEN:
            case IdentifierParser.ELSE:
            case IdentifierParser.INF:
            case IdentifierParser.PRIVILEGE_VALUE:
            case IdentifierParser.REPAIR:
            case IdentifierParser.SCHEMA_REPLICATION_FACTOR:
            case IdentifierParser.DATA_REPLICATION_FACTOR:
            case IdentifierParser.TIME_PARTITION_INTERVAL:
            case IdentifierParser.SCHEMA_REGION_GROUP_NUM:
            case IdentifierParser.DATA_REGION_GROUP_NUM:
            case IdentifierParser.CURRENT_TIMESTAMP:
            case IdentifierParser.AUDIT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 4;
                this.keyWords();
                }
                break;
            case IdentifierParser.DURATION_LITERAL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 5;
                this.match(IdentifierParser.DURATION_LITERAL);
                }
                break;
            case IdentifierParser.ID:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 6;
                this.match(IdentifierParser.ID);
                }
                break;
            case IdentifierParser.QUOTED_ID:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 7;
                this.match(IdentifierParser.QUOTED_ID);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public keyWords(): KeyWordsContext {
        let localContext = new KeyWordsContext(this.context, this.state);
        this.enterRule(localContext, 2, IdentifierParser.RULE_keyWords);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 10;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967280) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294962175) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4286578687) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294950911) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 4294704991) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & 4156555263) !== 0) || ((((_la - 224)) & ~0x1F) === 0 && ((1 << (_la - 224)) & 4293918719) !== 0) || ((((_la - 256)) & ~0x1F) === 0 && ((1 << (_la - 256)) & 33292301) !== 0) || _la === 315)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public static readonly _serializedATN: number[] = [
        4,1,315,13,2,0,7,0,2,1,7,1,1,0,1,0,1,0,1,0,3,0,9,8,0,1,1,1,1,1,1,
        0,0,2,0,2,0,1,14,0,4,73,75,75,77,118,120,141,143,164,166,166,168,
        177,179,213,215,218,220,243,245,256,258,259,274,280,315,315,13,0,
        8,1,0,0,0,2,10,1,0,0,0,4,9,3,2,1,0,5,9,5,309,0,0,6,9,5,313,0,0,7,
        9,5,314,0,0,8,4,1,0,0,0,8,5,1,0,0,0,8,6,1,0,0,0,8,7,1,0,0,0,9,1,
        1,0,0,0,10,11,7,0,0,0,11,3,1,0,0,0,1,8
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!IdentifierParser.__ATN) {
            IdentifierParser.__ATN = new antlr.ATNDeserializer().deserialize(IdentifierParser._serializedATN);
        }

        return IdentifierParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(IdentifierParser.literalNames, IdentifierParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return IdentifierParser.vocabulary;
    }

    private static readonly decisionsToDFA = IdentifierParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class IdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public keyWords(): KeyWordsContext | null {
        return this.getRuleContext(0, KeyWordsContext);
    }
    public DURATION_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.DURATION_LITERAL, 0);
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.ID, 0);
    }
    public QUOTED_ID(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.QUOTED_ID, 0);
    }
    public override get ruleIndex(): number {
        return IdentifierParser.RULE_identifier;
    }
    public override enterRule(listener: IdentifierParserListener): void {
        if(listener.enterIdentifier) {
             listener.enterIdentifier(this);
        }
    }
    public override exitRule(listener: IdentifierParserListener): void {
        if(listener.exitIdentifier) {
             listener.exitIdentifier(this);
        }
    }
    public override accept<Result>(visitor: IdentifierParserVisitor<Result>): Result | null {
        if (visitor.visitIdentifier) {
            return visitor.visitIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class KeyWordsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ADD(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.ADD, 0);
    }
    public AFTER(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.AFTER, 0);
    }
    public ALIAS(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.ALIAS, 0);
    }
    public ALIGN(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.ALIGN, 0);
    }
    public ALIGNED(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.ALIGNED, 0);
    }
    public ALL(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.ALL, 0);
    }
    public ALTER(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.ALTER, 0);
    }
    public ANALYZE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.ANALYZE, 0);
    }
    public AND(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.AND, 0);
    }
    public ANY(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.ANY, 0);
    }
    public APPEND(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.APPEND, 0);
    }
    public AS(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.AS, 0);
    }
    public ASC(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.ASC, 0);
    }
    public ATTRIBUTES(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.ATTRIBUTES, 0);
    }
    public BEFORE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.BEFORE, 0);
    }
    public BEGIN(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.BEGIN, 0);
    }
    public BETWEEN(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.BETWEEN, 0);
    }
    public BLOCKED(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.BLOCKED, 0);
    }
    public BOUNDARY(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.BOUNDARY, 0);
    }
    public BY(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.BY, 0);
    }
    public CACHE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.CACHE, 0);
    }
    public CALL(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.CALL, 0);
    }
    public CASE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.CASE, 0);
    }
    public CAST(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.CAST, 0);
    }
    public CHILD(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.CHILD, 0);
    }
    public CLEAR(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.CLEAR, 0);
    }
    public CLUSTER(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.CLUSTER, 0);
    }
    public CLUSTERID(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.CLUSTERID, 0);
    }
    public COMMENT(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.COMMENT, 0);
    }
    public CONCAT(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.CONCAT, 0);
    }
    public CONDITION(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.CONDITION, 0);
    }
    public CONFIGNODE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.CONFIGNODE, 0);
    }
    public CONFIGNODES(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.CONFIGNODES, 0);
    }
    public CONFIGURATION(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.CONFIGURATION, 0);
    }
    public CONNECTION(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.CONNECTION, 0);
    }
    public CONNECTOR(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.CONNECTOR, 0);
    }
    public CONTAIN(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.CONTAIN, 0);
    }
    public CONTAINS(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.CONTAINS, 0);
    }
    public CONTINUOUS(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.CONTINUOUS, 0);
    }
    public COUNT(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.COUNT, 0);
    }
    public CQ(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.CQ, 0);
    }
    public CQS(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.CQS, 0);
    }
    public CREATE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.CREATE, 0);
    }
    public CURRENT_SQL_DIALECT(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.CURRENT_SQL_DIALECT, 0);
    }
    public CURRENT_USER(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.CURRENT_USER, 0);
    }
    public DATA(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.DATA, 0);
    }
    public DATA_REPLICATION_FACTOR(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.DATA_REPLICATION_FACTOR, 0);
    }
    public DATA_REGION_GROUP_NUM(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.DATA_REGION_GROUP_NUM, 0);
    }
    public DATABASE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.DATABASE, 0);
    }
    public DATABASES(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.DATABASES, 0);
    }
    public DATANODE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.DATANODE, 0);
    }
    public DATANODEID(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.DATANODEID, 0);
    }
    public DATANODES(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.DATANODES, 0);
    }
    public DATASET(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.DATASET, 0);
    }
    public DEACTIVATE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.DEACTIVATE, 0);
    }
    public DEBUG(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.DEBUG, 0);
    }
    public DEFAULT(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.DEFAULT, 0);
    }
    public DELETE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.DELETE, 0);
    }
    public DESC(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.DESC, 0);
    }
    public DESCRIBE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.DESCRIBE, 0);
    }
    public DETAILS(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.DETAILS, 0);
    }
    public DEVICE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.DEVICE, 0);
    }
    public DEVICES(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.DEVICES, 0);
    }
    public DISABLE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.DISABLE, 0);
    }
    public DISCARD(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.DISCARD, 0);
    }
    public DROP(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.DROP, 0);
    }
    public ELAPSEDTIME(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.ELAPSEDTIME, 0);
    }
    public ELSE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.ELSE, 0);
    }
    public END(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.END, 0);
    }
    public ENDTIME(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.ENDTIME, 0);
    }
    public ESCAPE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.ESCAPE, 0);
    }
    public EVERY(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.EVERY, 0);
    }
    public EXPLAIN(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.EXPLAIN, 0);
    }
    public EXTRACTOR(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.EXTRACTOR, 0);
    }
    public FALSE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.FALSE, 0);
    }
    public FIELD(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.FIELD, 0);
    }
    public FILL(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.FILL, 0);
    }
    public FILE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.FILE, 0);
    }
    public FIRST(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.FIRST, 0);
    }
    public FLUSH(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.FLUSH, 0);
    }
    public FOR(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.FOR, 0);
    }
    public FROM(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.FROM, 0);
    }
    public FULL(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.FULL, 0);
    }
    public FUNCTION(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.FUNCTION, 0);
    }
    public FUNCTIONS(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.FUNCTIONS, 0);
    }
    public GLOBAL(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.GLOBAL, 0);
    }
    public GRANT(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.GRANT, 0);
    }
    public GROUP(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.GROUP, 0);
    }
    public HAVING(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.HAVING, 0);
    }
    public HEAD(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.HEAD, 0);
    }
    public HYPERPARAMETERS(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.HYPERPARAMETERS, 0);
    }
    public IN(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.IN, 0);
    }
    public INDEX(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.INDEX, 0);
    }
    public INFERENCE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.INFERENCE, 0);
    }
    public INFO(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.INFO, 0);
    }
    public INSERT(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.INSERT, 0);
    }
    public INTO(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.INTO, 0);
    }
    public IS(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.IS, 0);
    }
    public KILL(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.KILL, 0);
    }
    public LABEL(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.LABEL, 0);
    }
    public LAST(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.LAST, 0);
    }
    public LATEST(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.LATEST, 0);
    }
    public LEVEL(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.LEVEL, 0);
    }
    public LIKE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.LIKE, 0);
    }
    public LIMIT(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.LIMIT, 0);
    }
    public LINEAR(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.LINEAR, 0);
    }
    public LINK(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.LINK, 0);
    }
    public LIST(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.LIST, 0);
    }
    public LOAD(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.LOAD, 0);
    }
    public LOCAL(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.LOCAL, 0);
    }
    public LOCK(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.LOCK, 0);
    }
    public MERGE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.MERGE, 0);
    }
    public METADATA(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.METADATA, 0);
    }
    public MIGRATE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.MIGRATE, 0);
    }
    public AINODES(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.AINODES, 0);
    }
    public MODEL(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.MODEL, 0);
    }
    public MODELS(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.MODELS, 0);
    }
    public MODIFY(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.MODIFY, 0);
    }
    public NAN(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.NAN, 0);
    }
    public NODEID(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.NODEID, 0);
    }
    public NODES(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.NODES, 0);
    }
    public NONE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.NONE, 0);
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.NOT, 0);
    }
    public NOW(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.NOW, 0);
    }
    public NULL(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.NULL, 0);
    }
    public NULLS(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.NULLS, 0);
    }
    public OF(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.OF, 0);
    }
    public OFF(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.OFF, 0);
    }
    public OFFSET(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.OFFSET, 0);
    }
    public ON(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.ON, 0);
    }
    public OPTIONS(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.OPTIONS, 0);
    }
    public OR(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.OR, 0);
    }
    public ORDER(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.ORDER, 0);
    }
    public ONSUCCESS(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.ONSUCCESS, 0);
    }
    public PARTITION(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.PARTITION, 0);
    }
    public PASSWORD(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.PASSWORD, 0);
    }
    public PATHS(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.PATHS, 0);
    }
    public PIPE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.PIPE, 0);
    }
    public PIPES(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.PIPES, 0);
    }
    public PIPESINK(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.PIPESINK, 0);
    }
    public PIPESINKS(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.PIPESINKS, 0);
    }
    public PIPESINKTYPE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.PIPESINKTYPE, 0);
    }
    public PIPEPLUGIN(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.PIPEPLUGIN, 0);
    }
    public PIPEPLUGINS(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.PIPEPLUGINS, 0);
    }
    public POLICY(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.POLICY, 0);
    }
    public PREVIOUS(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.PREVIOUS, 0);
    }
    public PREVIOUSUNTILLAST(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.PREVIOUSUNTILLAST, 0);
    }
    public PRIVILEGES(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.PRIVILEGES, 0);
    }
    public PRIVILEGE_VALUE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.PRIVILEGE_VALUE, 0);
    }
    public PROCESSLIST(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.PROCESSLIST, 0);
    }
    public PROCESSOR(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.PROCESSOR, 0);
    }
    public PROPERTY(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.PROPERTY, 0);
    }
    public PRUNE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.PRUNE, 0);
    }
    public QUERIES(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.QUERIES, 0);
    }
    public QUERY(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.QUERY, 0);
    }
    public QUERYID(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.QUERYID, 0);
    }
    public QUOTA(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.QUOTA, 0);
    }
    public RANGE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.RANGE, 0);
    }
    public READONLY(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.READONLY, 0);
    }
    public READ(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.READ, 0);
    }
    public REGEXP(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.REGEXP, 0);
    }
    public REGIONID(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.REGIONID, 0);
    }
    public REGIONS(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.REGIONS, 0);
    }
    public REMOVE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.REMOVE, 0);
    }
    public RENAME(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.RENAME, 0);
    }
    public RESAMPLE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.RESAMPLE, 0);
    }
    public RESOURCE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.RESOURCE, 0);
    }
    public REPAIR(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.REPAIR, 0);
    }
    public REPLACE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.REPLACE, 0);
    }
    public RESTRICT(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.RESTRICT, 0);
    }
    public REVOKE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.REVOKE, 0);
    }
    public ROLE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.ROLE, 0);
    }
    public ROUND(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.ROUND, 0);
    }
    public RUNNING(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.RUNNING, 0);
    }
    public SCHEMA(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.SCHEMA, 0);
    }
    public SCHEMA_REPLICATION_FACTOR(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.SCHEMA_REPLICATION_FACTOR, 0);
    }
    public SCHEMA_REGION_GROUP_NUM(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.SCHEMA_REGION_GROUP_NUM, 0);
    }
    public SELECT(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.SELECT, 0);
    }
    public SERIESSLOTID(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.SERIESSLOTID, 0);
    }
    public SESSION(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.SESSION, 0);
    }
    public SET(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.SET, 0);
    }
    public SETTLE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.SETTLE, 0);
    }
    public SGLEVEL(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.SGLEVEL, 0);
    }
    public SHOW(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.SHOW, 0);
    }
    public SINK(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.SINK, 0);
    }
    public SLIMIT(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.SLIMIT, 0);
    }
    public SOFFSET(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.SOFFSET, 0);
    }
    public SOURCE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.SOURCE, 0);
    }
    public SPACE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.SPACE, 0);
    }
    public SQL_DIALECT(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.SQL_DIALECT, 0);
    }
    public STORAGE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.STORAGE, 0);
    }
    public START(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.START, 0);
    }
    public STARTTIME(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.STARTTIME, 0);
    }
    public STATEFUL(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.STATEFUL, 0);
    }
    public STATELESS(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.STATELESS, 0);
    }
    public STATEMENT(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.STATEMENT, 0);
    }
    public STOP(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.STOP, 0);
    }
    public SUBSCRIPTION(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.SUBSCRIPTION, 0);
    }
    public SUBSCRIPTIONS(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.SUBSCRIPTIONS, 0);
    }
    public SUBSTRING(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.SUBSTRING, 0);
    }
    public SYSTEM(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.SYSTEM, 0);
    }
    public TABLE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.TABLE, 0);
    }
    public TAG(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.TAG, 0);
    }
    public TAGS(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.TAGS, 0);
    }
    public TAIL(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.TAIL, 0);
    }
    public TASK(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.TASK, 0);
    }
    public TEMPLATE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.TEMPLATE, 0);
    }
    public TEMPLATES(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.TEMPLATES, 0);
    }
    public THEN(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.THEN, 0);
    }
    public THROTTLE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.THROTTLE, 0);
    }
    public TIME_PARTITION_INTERVAL(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.TIME_PARTITION_INTERVAL, 0);
    }
    public TIMEOUT(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.TIMEOUT, 0);
    }
    public TIMESERIES(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.TIMESERIES, 0);
    }
    public TIMEPARTITION(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.TIMEPARTITION, 0);
    }
    public TIMESLOTID(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.TIMESLOTID, 0);
    }
    public TO(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.TO, 0);
    }
    public TOLERANCE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.TOLERANCE, 0);
    }
    public TOP(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.TOP, 0);
    }
    public TOPIC(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.TOPIC, 0);
    }
    public TOPICS(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.TOPICS, 0);
    }
    public TRACING(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.TRACING, 0);
    }
    public TREE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.TREE, 0);
    }
    public TRIALS(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.TRIALS, 0);
    }
    public TRIGGER(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.TRIGGER, 0);
    }
    public TRIGGERS(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.TRIGGERS, 0);
    }
    public TRUE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.TRUE, 0);
    }
    public TTL(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.TTL, 0);
    }
    public UNLINK(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.UNLINK, 0);
    }
    public UNLOAD(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.UNLOAD, 0);
    }
    public UNSET(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.UNSET, 0);
    }
    public UPDATE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.UPDATE, 0);
    }
    public UPSERT(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.UPSERT, 0);
    }
    public URI(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.URI, 0);
    }
    public USED(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.USED, 0);
    }
    public USER(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.USER, 0);
    }
    public USING(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.USING, 0);
    }
    public VALUES(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.VALUES, 0);
    }
    public VARIABLES(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.VARIABLES, 0);
    }
    public VARIATION(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.VARIATION, 0);
    }
    public VERIFY(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.VERIFY, 0);
    }
    public VERSION(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.VERSION, 0);
    }
    public VIEW(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.VIEW, 0);
    }
    public WATERMARK_EMBEDDING(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.WATERMARK_EMBEDDING, 0);
    }
    public WHEN(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.WHEN, 0);
    }
    public WHERE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.WHERE, 0);
    }
    public WITH(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.WITH, 0);
    }
    public WITHOUT(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.WITHOUT, 0);
    }
    public WRITABLE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.WRITABLE, 0);
    }
    public WRITE(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.WRITE, 0);
    }
    public AUDIT(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.AUDIT, 0);
    }
    public OPTION(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.OPTION, 0);
    }
    public INF(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.INF, 0);
    }
    public CURRENT_TIMESTAMP(): antlr.TerminalNode | null {
        return this.getToken(IdentifierParser.CURRENT_TIMESTAMP, 0);
    }
    public override get ruleIndex(): number {
        return IdentifierParser.RULE_keyWords;
    }
    public override enterRule(listener: IdentifierParserListener): void {
        if(listener.enterKeyWords) {
             listener.enterKeyWords(this);
        }
    }
    public override exitRule(listener: IdentifierParserListener): void {
        if(listener.exitKeyWords) {
             listener.exitKeyWords(this);
        }
    }
    public override accept<Result>(visitor: IdentifierParserVisitor<Result>): Result | null {
        if (visitor.visitKeyWords) {
            return visitor.visitKeyWords(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
