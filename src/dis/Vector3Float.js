/**
 * Section 5.2.33. Three floating point values, x, y, and z
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
dis.Vector3Float = function()
{
   /** 
    * X value 
    * @type {number}
    * @instance
    */
   this.x = 0;

   /** 
    * y Value 
    * @type {number}
    * @instance
    */
   this.y = 0;

   /** 
    * Z value 
    * @type {number}
    * @instance
    */
   this.z = 0;

  /**
   * @param {InputStream} inputStream
   */
  dis.Vector3Float.prototype.initFromBinary = function(inputStream)
  {
       this.x = inputStream.readFloat32();
       this.y = inputStream.readFloat32();
       this.z = inputStream.readFloat32();
  };

  /**
	 * @param {OutputStream} outputStream 
	 */
  dis.Vector3Float.prototype.encodeToBinary = function(outputStream)
  {
       outputStream.writeFloat32(this.x);
       outputStream.writeFloat32(this.y);
       outputStream.writeFloat32(this.z);
  };
}; // end of class

 // node.js module support
exports.Vector3Float = dis.Vector3Float;

// End of Vector3Float class

