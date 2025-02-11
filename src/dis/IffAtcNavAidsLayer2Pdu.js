/**
 * Section 5.3.7.4.2 When present, layer 2 should follow layer 1 and have the following fields. This requires manual cleanup.        the beamData attribute semantics are used in multiple ways. UNFINSISHED
 *
 * Copyright (c) 2008-2015, MOVES Institute, Naval Postgraduate School. All rights reserved.
 * This work is licensed under the BSD open source license, available at https://www.movesinstitute.org/licenses/bsd.html
 *
 * @author DMcG
 */
// On the client side, support for a  namespace.
if (typeof dis === "undefined")
 var dis = {};


// Support for node.js style modules. Ignored if used in a client context.
// See http://howtonode.org/creating-custom-modules
if (typeof exports === "undefined")
 exports = {};


/**
 * @constructor
 * @memberof dis
 */
dis.IffAtcNavAidsLayer2Pdu = function()
{
   /**
    * The version of the protocol. 5=DIS-1995, 6=DIS-1998.
    * @type {number}
    * @instance
    */
   this.protocolVersion = 6;

   /**
    * Exercise ID
    * @type {number}
    * @instance
    */
   this.exerciseID = 0;

   /**
    * Type of pdu, unique for each PDU class
    * @type {number}
    * @instance
    */
   this.pduType = 28;

   /**
    * value that refers to the protocol family, eg SimulationManagement, et
    * @type {number}
    * @instance
    */
   this.protocolFamily = 6;

   /**
    * Timestamp value
    * @type {number}
    * @instance
    */
   this.timestamp = 0;

   /**
    * Length, in bytes, of the PDU. Changed name from length to avoid use of Hibernate QL reserved word
    * @type {number}
    * @instance
    */
   this.pduLength = 0;

   /**
    * zero-filled array of padding
    * @type {number}
    * @instance
    */
   this.padding = 0;

   /**
    * ID of the entity that is the source of the emissions
    * @type {EntityID}
    * @instance
    */
   this.emittingEntityId = new dis.EntityID(); 

   /**
    * Number generated by the issuing simulation to associate realted events.
    * @type {EventID}
    * @instance
    */
   this.eventID = new dis.EventID(); 

   /**
    * Location wrt entity. There is some ambugiuity in the standard here, but this is the order it is listed in the table.
    * @type {Vector3Float}
    * @instance
    */
   this.location = new dis.Vector3Float(); 

   /**
    * System ID information
    * @type {SystemID}
    * @instance
    */
   this.systemID = new dis.SystemID(); 

   /**
    * padding
    * @type {number}
    * @instance
    */
   this.pad2 = 0;

   /**
    * fundamental parameters
    * @type {IffFundamentalData}
    * @instance
    */
   this.fundamentalParameters = new dis.IffFundamentalData(); 

   /**
    * layer header
    * @type {LayerHeader}
    * @instance
    */
   this.layerHeader = new dis.LayerHeader(); 

   /**
    * beam data
    * @type {BeamData}
    * @instance
    */
   this.beamData = new dis.BeamData(); 

   /**
    * Secondary operational data, 5.2.57
    * @type {BeamData}
    * @instance
    */
   this.secondaryOperationalData = new dis.BeamData(); 

   /**
    * variable length list of fundamental parameters. ^^^This is wrong
    * @type {Array<FundamentalParameterDataIff>}
    * @instance
    */
    this.fundamentalIffParameters = new Array();
 
  /**
   * @param {InputStream} inputStream
   */
  dis.IffAtcNavAidsLayer2Pdu.prototype.initFromBinary = function(inputStream)
  {
       this.protocolVersion = inputStream.readUByte();
       this.exerciseID = inputStream.readUByte();
       this.pduType = inputStream.readUByte();
       this.protocolFamily = inputStream.readUByte();
       this.timestamp = inputStream.readUInt();
       this.pduLength = inputStream.readUShort();
       this.padding = inputStream.readShort();
       this.emittingEntityId.initFromBinary(inputStream);
       this.eventID.initFromBinary(inputStream);
       this.location.initFromBinary(inputStream);
       this.systemID.initFromBinary(inputStream);
       this.pad2 = inputStream.readUShort();
       this.fundamentalParameters.initFromBinary(inputStream);
       this.layerHeader.initFromBinary(inputStream);
       this.beamData.initFromBinary(inputStream);
       this.secondaryOperationalData.initFromBinary(inputStream);
       for(var idx = 0; idx < this.pad2; idx++)
       {
           var anX = new dis.FundamentalParameterDataIff();
           anX.initFromBinary(inputStream);
           this.fundamentalIffParameters.push(anX);
       }

  };

  /**
	 * @param {OutputStream} outputStream 
	 */
  dis.IffAtcNavAidsLayer2Pdu.prototype.encodeToBinary = function(outputStream)
  {
       outputStream.writeUByte(this.protocolVersion);
       outputStream.writeUByte(this.exerciseID);
       outputStream.writeUByte(this.pduType);
       outputStream.writeUByte(this.protocolFamily);
       outputStream.writeUInt(this.timestamp);
       outputStream.writeUShort(this.pduLength);
       outputStream.writeShort(this.padding);
       this.emittingEntityId.encodeToBinary(outputStream);
       this.eventID.encodeToBinary(outputStream);
       this.location.encodeToBinary(outputStream);
       this.systemID.encodeToBinary(outputStream);
       outputStream.writeUShort(this.pad2);
       this.fundamentalParameters.encodeToBinary(outputStream);
       this.layerHeader.encodeToBinary(outputStream);
       this.beamData.encodeToBinary(outputStream);
       this.secondaryOperationalData.encodeToBinary(outputStream);
       for(var idx = 0; idx < this.fundamentalIffParameters.length; idx++)
       {
        this.fundamentalIffParameters[idx].encodeToBinary(outputStream);
       }

  };
}; // end of class

 // node.js module support
exports.IffAtcNavAidsLayer2Pdu = dis.IffAtcNavAidsLayer2Pdu;

// End of IffAtcNavAidsLayer2Pdu class

