/**
 * Section 5.2.39. Specification of the data necessary to  describe the scan volume of an emitter.
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
dis.BeamData = function()
{
   /**
    * Specifies the beam azimuth an elevation centers and corresponding half-angles     to describe the scan volume
    * @type {number}
    * @instance
    */
   this.beamAzimuthCenter = 0;

   /**
    * Specifies the beam azimuth sweep to determine scan volume
    * @type {number}
    * @instance
    */
   this.beamAzimuthSweep = 0;

   /**
    * Specifies the beam elevation center to determine scan volume
    * @type {number}
    * @instance
    */
   this.beamElevationCenter = 0;

   /**
    * Specifies the beam elevation sweep to determine scan volume
    * @type {number}
    * @instance
    */
   this.beamElevationSweep = 0;

   /**
    * allows receiver to synchronize its regenerated scan pattern to     that of the emmitter. Specifies the percentage of time a scan is through its pattern from its origion.
    * @type {number}
    * @instance
    */
   this.beamSweepSync = 0;

  /**
   * @param {InputStream} inputStream
   */
  dis.BeamData.prototype.initFromBinary = function(inputStream)
  {
       this.beamAzimuthCenter = inputStream.readFloat32();
       this.beamAzimuthSweep = inputStream.readFloat32();
       this.beamElevationCenter = inputStream.readFloat32();
       this.beamElevationSweep = inputStream.readFloat32();
       this.beamSweepSync = inputStream.readFloat32();
  };

  /**
	 * @param {OutputStream} outputStream 
	 */
  dis.BeamData.prototype.encodeToBinary = function(outputStream)
  {
       outputStream.writeFloat32(this.beamAzimuthCenter);
       outputStream.writeFloat32(this.beamAzimuthSweep);
       outputStream.writeFloat32(this.beamElevationCenter);
       outputStream.writeFloat32(this.beamElevationSweep);
       outputStream.writeFloat32(this.beamSweepSync);
  };
}; // end of class

 // node.js module support
exports.BeamData = dis.BeamData;

// End of BeamData class

