/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Block = (function() {

    /**
     * Properties of a Block.
     * @exports IBlock
     * @interface IBlock
     * @property {IBlockHeader|null} [header] Block header
     * @property {Array.<ITx>|null} [txs] Block txs
     */

    /**
     * Constructs a new Block.
     * @exports Block
     * @classdesc Represents a Block.
     * @implements IBlock
     * @constructor
     * @param {IBlock=} [properties] Properties to set
     */
    function Block(properties) {
        this.txs = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Block header.
     * @member {IBlockHeader|null|undefined} header
     * @memberof Block
     * @instance
     */
    Block.prototype.header = null;

    /**
     * Block txs.
     * @member {Array.<ITx>} txs
     * @memberof Block
     * @instance
     */
    Block.prototype.txs = $util.emptyArray;

    /**
     * Creates a new Block instance using the specified properties.
     * @function create
     * @memberof Block
     * @static
     * @param {IBlock=} [properties] Properties to set
     * @returns {Block} Block instance
     */
    Block.create = function create(properties) {
        return new Block(properties);
    };

    /**
     * Encodes the specified Block message. Does not implicitly {@link Block.verify|verify} messages.
     * @function encode
     * @memberof Block
     * @static
     * @param {IBlock} message Block message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Block.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.header != null && message.hasOwnProperty("header"))
            $root.BlockHeader.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.txs != null && message.txs.length)
            for (var i = 0; i < message.txs.length; ++i)
                $root.Tx.encode(message.txs[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Block message, length delimited. Does not implicitly {@link Block.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Block
     * @static
     * @param {IBlock} message Block message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Block.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Block message from the specified reader or buffer.
     * @function decode
     * @memberof Block
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Block} Block
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Block.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Block();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.header = $root.BlockHeader.decode(reader, reader.uint32());
                break;
            case 3:
                if (!(message.txs && message.txs.length))
                    message.txs = [];
                message.txs.push($root.Tx.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Block message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Block
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Block} Block
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Block.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Block message.
     * @function verify
     * @memberof Block
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Block.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.header != null && message.hasOwnProperty("header")) {
            var error = $root.BlockHeader.verify(message.header);
            if (error)
                return "header." + error;
        }
        if (message.txs != null && message.hasOwnProperty("txs")) {
            if (!Array.isArray(message.txs))
                return "txs: array expected";
            for (var i = 0; i < message.txs.length; ++i) {
                var error = $root.Tx.verify(message.txs[i]);
                if (error)
                    return "txs." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Block message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Block
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Block} Block
     */
    Block.fromObject = function fromObject(object) {
        if (object instanceof $root.Block)
            return object;
        var message = new $root.Block();
        if (object.header != null) {
            if (typeof object.header !== "object")
                throw TypeError(".Block.header: object expected");
            message.header = $root.BlockHeader.fromObject(object.header);
        }
        if (object.txs) {
            if (!Array.isArray(object.txs))
                throw TypeError(".Block.txs: array expected");
            message.txs = [];
            for (var i = 0; i < object.txs.length; ++i) {
                if (typeof object.txs[i] !== "object")
                    throw TypeError(".Block.txs: object expected");
                message.txs[i] = $root.Tx.fromObject(object.txs[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a Block message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Block
     * @static
     * @param {Block} message Block
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Block.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.txs = [];
        if (options.defaults)
            object.header = null;
        if (message.header != null && message.hasOwnProperty("header"))
            object.header = $root.BlockHeader.toObject(message.header, options);
        if (message.txs && message.txs.length) {
            object.txs = [];
            for (var j = 0; j < message.txs.length; ++j)
                object.txs[j] = $root.Tx.toObject(message.txs[j], options);
        }
        return object;
    };

    /**
     * Converts this Block to JSON.
     * @function toJSON
     * @memberof Block
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Block.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Block;
})();

$root.BlockHeader = (function() {

    /**
     * Properties of a BlockHeader.
     * @exports IBlockHeader
     * @interface IBlockHeader
     * @property {Uint8Array|null} [merkleRoot] BlockHeader merkleRoot
     * @property {Uint8Array|null} [stateRoot] BlockHeader stateRoot
     * @property {number|null} [difficulty] BlockHeader difficulty
     * @property {number|Long|null} [timeStamp] BlockHeader timeStamp
     */

    /**
     * Constructs a new BlockHeader.
     * @exports BlockHeader
     * @classdesc Represents a BlockHeader.
     * @implements IBlockHeader
     * @constructor
     * @param {IBlockHeader=} [properties] Properties to set
     */
    function BlockHeader(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * BlockHeader merkleRoot.
     * @member {Uint8Array} merkleRoot
     * @memberof BlockHeader
     * @instance
     */
    BlockHeader.prototype.merkleRoot = $util.newBuffer([]);

    /**
     * BlockHeader stateRoot.
     * @member {Uint8Array} stateRoot
     * @memberof BlockHeader
     * @instance
     */
    BlockHeader.prototype.stateRoot = $util.newBuffer([]);

    /**
     * BlockHeader difficulty.
     * @member {number} difficulty
     * @memberof BlockHeader
     * @instance
     */
    BlockHeader.prototype.difficulty = 0;

    /**
     * BlockHeader timeStamp.
     * @member {number|Long} timeStamp
     * @memberof BlockHeader
     * @instance
     */
    BlockHeader.prototype.timeStamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new BlockHeader instance using the specified properties.
     * @function create
     * @memberof BlockHeader
     * @static
     * @param {IBlockHeader=} [properties] Properties to set
     * @returns {BlockHeader} BlockHeader instance
     */
    BlockHeader.create = function create(properties) {
        return new BlockHeader(properties);
    };

    /**
     * Encodes the specified BlockHeader message. Does not implicitly {@link BlockHeader.verify|verify} messages.
     * @function encode
     * @memberof BlockHeader
     * @static
     * @param {IBlockHeader} message BlockHeader message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BlockHeader.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.merkleRoot != null && message.hasOwnProperty("merkleRoot"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.merkleRoot);
        if (message.stateRoot != null && message.hasOwnProperty("stateRoot"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.stateRoot);
        if (message.difficulty != null && message.hasOwnProperty("difficulty"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.difficulty);
        if (message.timeStamp != null && message.hasOwnProperty("timeStamp"))
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.timeStamp);
        return writer;
    };

    /**
     * Encodes the specified BlockHeader message, length delimited. Does not implicitly {@link BlockHeader.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BlockHeader
     * @static
     * @param {IBlockHeader} message BlockHeader message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BlockHeader.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BlockHeader message from the specified reader or buffer.
     * @function decode
     * @memberof BlockHeader
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BlockHeader} BlockHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BlockHeader.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BlockHeader();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 2:
                message.merkleRoot = reader.bytes();
                break;
            case 3:
                message.stateRoot = reader.bytes();
                break;
            case 4:
                message.difficulty = reader.int32();
                break;
            case 5:
                message.timeStamp = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a BlockHeader message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BlockHeader
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BlockHeader} BlockHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BlockHeader.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BlockHeader message.
     * @function verify
     * @memberof BlockHeader
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BlockHeader.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.merkleRoot != null && message.hasOwnProperty("merkleRoot"))
            if (!(message.merkleRoot && typeof message.merkleRoot.length === "number" || $util.isString(message.merkleRoot)))
                return "merkleRoot: buffer expected";
        if (message.stateRoot != null && message.hasOwnProperty("stateRoot"))
            if (!(message.stateRoot && typeof message.stateRoot.length === "number" || $util.isString(message.stateRoot)))
                return "stateRoot: buffer expected";
        if (message.difficulty != null && message.hasOwnProperty("difficulty"))
            if (!$util.isInteger(message.difficulty))
                return "difficulty: integer expected";
        if (message.timeStamp != null && message.hasOwnProperty("timeStamp"))
            if (!$util.isInteger(message.timeStamp) && !(message.timeStamp && $util.isInteger(message.timeStamp.low) && $util.isInteger(message.timeStamp.high)))
                return "timeStamp: integer|Long expected";
        return null;
    };

    /**
     * Creates a BlockHeader message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BlockHeader
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BlockHeader} BlockHeader
     */
    BlockHeader.fromObject = function fromObject(object) {
        if (object instanceof $root.BlockHeader)
            return object;
        var message = new $root.BlockHeader();
        if (object.merkleRoot != null)
            if (typeof object.merkleRoot === "string")
                $util.base64.decode(object.merkleRoot, message.merkleRoot = $util.newBuffer($util.base64.length(object.merkleRoot)), 0);
            else if (object.merkleRoot.length)
                message.merkleRoot = object.merkleRoot;
        if (object.stateRoot != null)
            if (typeof object.stateRoot === "string")
                $util.base64.decode(object.stateRoot, message.stateRoot = $util.newBuffer($util.base64.length(object.stateRoot)), 0);
            else if (object.stateRoot.length)
                message.stateRoot = object.stateRoot;
        if (object.difficulty != null)
            message.difficulty = object.difficulty | 0;
        if (object.timeStamp != null)
            if ($util.Long)
                (message.timeStamp = $util.Long.fromValue(object.timeStamp)).unsigned = false;
            else if (typeof object.timeStamp === "string")
                message.timeStamp = parseInt(object.timeStamp, 10);
            else if (typeof object.timeStamp === "number")
                message.timeStamp = object.timeStamp;
            else if (typeof object.timeStamp === "object")
                message.timeStamp = new $util.LongBits(object.timeStamp.low >>> 0, object.timeStamp.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a BlockHeader message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BlockHeader
     * @static
     * @param {BlockHeader} message BlockHeader
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BlockHeader.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.merkleRoot = options.bytes === String ? "" : [];
            object.stateRoot = options.bytes === String ? "" : [];
            object.difficulty = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.timeStamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.timeStamp = options.longs === String ? "0" : 0;
        }
        if (message.merkleRoot != null && message.hasOwnProperty("merkleRoot"))
            object.merkleRoot = options.bytes === String ? $util.base64.encode(message.merkleRoot, 0, message.merkleRoot.length) : options.bytes === Array ? Array.prototype.slice.call(message.merkleRoot) : message.merkleRoot;
        if (message.stateRoot != null && message.hasOwnProperty("stateRoot"))
            object.stateRoot = options.bytes === String ? $util.base64.encode(message.stateRoot, 0, message.stateRoot.length) : options.bytes === Array ? Array.prototype.slice.call(message.stateRoot) : message.stateRoot;
        if (message.difficulty != null && message.hasOwnProperty("difficulty"))
            object.difficulty = message.difficulty;
        if (message.timeStamp != null && message.hasOwnProperty("timeStamp"))
            if (typeof message.timeStamp === "number")
                object.timeStamp = options.longs === String ? String(message.timeStamp) : message.timeStamp;
            else
                object.timeStamp = options.longs === String ? $util.Long.prototype.toString.call(message.timeStamp) : options.longs === Number ? new $util.LongBits(message.timeStamp.low >>> 0, message.timeStamp.high >>> 0).toNumber() : message.timeStamp;
        return object;
    };

    /**
     * Converts this BlockHeader to JSON.
     * @function toJSON
     * @memberof BlockHeader
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BlockHeader.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return BlockHeader;
})();

$root.Tx = (function() {

    /**
     * Properties of a Tx.
     * @exports ITx
     * @interface ITx
     * @property {Uint8Array|null} [from] Tx from
     * @property {Uint8Array|null} [to] Tx to
     * @property {number|Long|null} [amount] Tx amount
     * @property {number|Long|null} [fee] Tx fee
     * @property {number|null} [nonce] Tx nonce
     * @property {Uint8Array|null} [signature] Tx signature
     * @property {number|null} [recovery] Tx recovery
     */

    /**
     * Constructs a new Tx.
     * @exports Tx
     * @classdesc Represents a Tx.
     * @implements ITx
     * @constructor
     * @param {ITx=} [properties] Properties to set
     */
    function Tx(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Tx from.
     * @member {Uint8Array} from
     * @memberof Tx
     * @instance
     */
    Tx.prototype.from = $util.newBuffer([]);

    /**
     * Tx to.
     * @member {Uint8Array} to
     * @memberof Tx
     * @instance
     */
    Tx.prototype.to = $util.newBuffer([]);

    /**
     * Tx amount.
     * @member {number|Long} amount
     * @memberof Tx
     * @instance
     */
    Tx.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Tx fee.
     * @member {number|Long} fee
     * @memberof Tx
     * @instance
     */
    Tx.prototype.fee = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Tx nonce.
     * @member {number} nonce
     * @memberof Tx
     * @instance
     */
    Tx.prototype.nonce = 0;

    /**
     * Tx signature.
     * @member {Uint8Array} signature
     * @memberof Tx
     * @instance
     */
    Tx.prototype.signature = $util.newBuffer([]);

    /**
     * Tx recovery.
     * @member {number} recovery
     * @memberof Tx
     * @instance
     */
    Tx.prototype.recovery = 0;

    /**
     * Creates a new Tx instance using the specified properties.
     * @function create
     * @memberof Tx
     * @static
     * @param {ITx=} [properties] Properties to set
     * @returns {Tx} Tx instance
     */
    Tx.create = function create(properties) {
        return new Tx(properties);
    };

    /**
     * Encodes the specified Tx message. Does not implicitly {@link Tx.verify|verify} messages.
     * @function encode
     * @memberof Tx
     * @static
     * @param {ITx} message Tx message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Tx.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.from != null && message.hasOwnProperty("from"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.from);
        if (message.to != null && message.hasOwnProperty("to"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.to);
        if (message.amount != null && message.hasOwnProperty("amount"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.amount);
        if (message.fee != null && message.hasOwnProperty("fee"))
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.fee);
        if (message.nonce != null && message.hasOwnProperty("nonce"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.nonce);
        if (message.signature != null && message.hasOwnProperty("signature"))
            writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.signature);
        if (message.recovery != null && message.hasOwnProperty("recovery"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.recovery);
        return writer;
    };

    /**
     * Encodes the specified Tx message, length delimited. Does not implicitly {@link Tx.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Tx
     * @static
     * @param {ITx} message Tx message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Tx.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Tx message from the specified reader or buffer.
     * @function decode
     * @memberof Tx
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Tx} Tx
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Tx.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Tx();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.from = reader.bytes();
                break;
            case 2:
                message.to = reader.bytes();
                break;
            case 3:
                message.amount = reader.int64();
                break;
            case 4:
                message.fee = reader.int64();
                break;
            case 5:
                message.nonce = reader.int32();
                break;
            case 6:
                message.signature = reader.bytes();
                break;
            case 7:
                message.recovery = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Tx message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Tx
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Tx} Tx
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Tx.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Tx message.
     * @function verify
     * @memberof Tx
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Tx.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.from != null && message.hasOwnProperty("from"))
            if (!(message.from && typeof message.from.length === "number" || $util.isString(message.from)))
                return "from: buffer expected";
        if (message.to != null && message.hasOwnProperty("to"))
            if (!(message.to && typeof message.to.length === "number" || $util.isString(message.to)))
                return "to: buffer expected";
        if (message.amount != null && message.hasOwnProperty("amount"))
            if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                return "amount: integer|Long expected";
        if (message.fee != null && message.hasOwnProperty("fee"))
            if (!$util.isInteger(message.fee) && !(message.fee && $util.isInteger(message.fee.low) && $util.isInteger(message.fee.high)))
                return "fee: integer|Long expected";
        if (message.nonce != null && message.hasOwnProperty("nonce"))
            if (!$util.isInteger(message.nonce))
                return "nonce: integer expected";
        if (message.signature != null && message.hasOwnProperty("signature"))
            if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                return "signature: buffer expected";
        if (message.recovery != null && message.hasOwnProperty("recovery"))
            if (!$util.isInteger(message.recovery))
                return "recovery: integer expected";
        return null;
    };

    /**
     * Creates a Tx message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Tx
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Tx} Tx
     */
    Tx.fromObject = function fromObject(object) {
        if (object instanceof $root.Tx)
            return object;
        var message = new $root.Tx();
        if (object.from != null)
            if (typeof object.from === "string")
                $util.base64.decode(object.from, message.from = $util.newBuffer($util.base64.length(object.from)), 0);
            else if (object.from.length)
                message.from = object.from;
        if (object.to != null)
            if (typeof object.to === "string")
                $util.base64.decode(object.to, message.to = $util.newBuffer($util.base64.length(object.to)), 0);
            else if (object.to.length)
                message.to = object.to;
        if (object.amount != null)
            if ($util.Long)
                (message.amount = $util.Long.fromValue(object.amount)).unsigned = false;
            else if (typeof object.amount === "string")
                message.amount = parseInt(object.amount, 10);
            else if (typeof object.amount === "number")
                message.amount = object.amount;
            else if (typeof object.amount === "object")
                message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber();
        if (object.fee != null)
            if ($util.Long)
                (message.fee = $util.Long.fromValue(object.fee)).unsigned = false;
            else if (typeof object.fee === "string")
                message.fee = parseInt(object.fee, 10);
            else if (typeof object.fee === "number")
                message.fee = object.fee;
            else if (typeof object.fee === "object")
                message.fee = new $util.LongBits(object.fee.low >>> 0, object.fee.high >>> 0).toNumber();
        if (object.nonce != null)
            message.nonce = object.nonce | 0;
        if (object.signature != null)
            if (typeof object.signature === "string")
                $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
            else if (object.signature.length)
                message.signature = object.signature;
        if (object.recovery != null)
            message.recovery = object.recovery | 0;
        return message;
    };

    /**
     * Creates a plain object from a Tx message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Tx
     * @static
     * @param {Tx} message Tx
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Tx.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.from = options.bytes === String ? "" : [];
            object.to = options.bytes === String ? "" : [];
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.amount = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.fee = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.fee = options.longs === String ? "0" : 0;
            object.nonce = 0;
            object.signature = options.bytes === String ? "" : [];
            object.recovery = 0;
        }
        if (message.from != null && message.hasOwnProperty("from"))
            object.from = options.bytes === String ? $util.base64.encode(message.from, 0, message.from.length) : options.bytes === Array ? Array.prototype.slice.call(message.from) : message.from;
        if (message.to != null && message.hasOwnProperty("to"))
            object.to = options.bytes === String ? $util.base64.encode(message.to, 0, message.to.length) : options.bytes === Array ? Array.prototype.slice.call(message.to) : message.to;
        if (message.amount != null && message.hasOwnProperty("amount"))
            if (typeof message.amount === "number")
                object.amount = options.longs === String ? String(message.amount) : message.amount;
            else
                object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber() : message.amount;
        if (message.fee != null && message.hasOwnProperty("fee"))
            if (typeof message.fee === "number")
                object.fee = options.longs === String ? String(message.fee) : message.fee;
            else
                object.fee = options.longs === String ? $util.Long.prototype.toString.call(message.fee) : options.longs === Number ? new $util.LongBits(message.fee.low >>> 0, message.fee.high >>> 0).toNumber() : message.fee;
        if (message.nonce != null && message.hasOwnProperty("nonce"))
            object.nonce = message.nonce;
        if (message.signature != null && message.hasOwnProperty("signature"))
            object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
        if (message.recovery != null && message.hasOwnProperty("recovery"))
            object.recovery = message.recovery;
        return object;
    };

    /**
     * Converts this Tx to JSON.
     * @function toJSON
     * @memberof Tx
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Tx.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Tx;
})();

module.exports = $root;
