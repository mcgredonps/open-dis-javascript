/**
 * 5.2.45. Fundamental IFF atc data
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
dis.FundamentalParameterDataIff = function()
{
   /**
    * ERP
    * @type {number}
    * @instance
    */
   this.erp = 0;

   /**
    * frequency
    * @type {number}
    * @instance
    */
   this.frequency = 0;

   /**
    * pgrf
    * @type {number}
    * @instance
    */
   this.pgrf = 0;

   /**
    * Pulse width
    * @type {number}
    * @instance
    */
   this.pulseWidth = 0;

   /**
    * Burst length
    * @type {number}
    * @instance
    */
   this.burstLength = 0;

   /**
    * Applicable modes enumeration
    * @type {number}
    * @instance
    */
   this.applicableModes = 0;

   /**
    * padding
    * @type {number}
    * @instance
    */
   this.pad2 = 0;

   /**
    * padding
    * @type {number}
    * @instance
    */
   this.pad3 = 0;

  /**
   * @param {InputStream} inputStream
   */
  dis.FundamentalParameterDataIff.prototype.initFromBinary = function(inputStream)
  {
       this.erp = inputStream.readFloat32();
       this.frequency = inputStream.readFloat32();
       this.pgrf = inputStream.readFloat32();
       this.pulseWidth = inputStream.readFloat32();
       this.burstLength = inputStream.readUInt();
       this.applicableModes = inputStream.readUByte();
       this.pad2 = inputStream.readUShort();
       this.pad3 = inputStream.readUByte();
  };

  /**
	 * @param {OutputStream} outputStream 
	 */
  dis.FundamentalParameterDataIff.prototype.encodeToBinary = function(outputStream)
  {
       outputStream.writeFloat32(this.erp);
       outputStream.writeFloat32(this.frequency);
       outputStream.writeFloat32(this.pgrf);
       outputStream.writeFloat32(this.pulseWidth);
       outputStream.writeUInt(this.burstLength);
       outputStream.writeUByte(this.applicableModes);
       outputStream.writeUShort(this.pad2);
       outputStream.writeUByte(this.pad3);
  };
}; // end of class

 // node.js module support
exports.FundamentalParameterDataIff = dis.FundamentalParameterDataIff;

// End of FundamentalParameterDataIff class

