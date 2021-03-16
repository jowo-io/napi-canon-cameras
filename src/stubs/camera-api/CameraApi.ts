import { Aperture } from "./Aperture";
import { ApiError } from "./ApiError";
import { Camera } from "./Camera";
import { CameraBrowser, EventCallback } from "./CameraBrowser";
import { CameraFile } from "./CameraFile";
import { CameraProperty } from "./CameraProperty";
import { Directory } from "./Directory";
import { ExposureCompensation } from "./ExposureCompensation";
import { Flag } from "./Flag";
import { ImageQuality } from "./ImageQuality";
import { ObjectEvent } from "./ObjectEvent";
import { Option } from "./Option";
import { ShutterSpeed } from "./ShutterSpeed";
import { StateEvent } from "./StateEvent";
import { Volume } from "./Volume";

export * from "./Aperture";
export * from "./ApiError";
export * from "./Camera";
export * from "./CameraBrowser";
export * from "./CameraFile";
export * from "./CameraProperty";
export * from "./Directory";
export * from "./ExposureCompensation";
export * from "./Flag";
export * from "./ImageQuality";
export * from "./ObjectEvent";
export * from "./Option";
export * from "./ShutterSpeed";
export * from "./StateEvent";
export * from "./Volume";

let STUB = 1;
/**
 * @external toPrimitive
 * @type {Symbol}
 */
STUB = 1;

/**
 * Watch for camera events
 * @param {int} [timeout=1000]
 * @return {Function} stop
 */
export const watchCameras = (timeout = 1000): (() => void) => {
    throw new Error("Not implemented - stub only.");
};
/**
 * Global CameraBrowser instance
 * @type {CameraBrowser}
 */
export const cameraBrowser = new CameraBrowser();

/**
 * @module CameraApi
 */
const CameraApi = {
    Aperture,
    ApiError,
    Camera,
    CameraBrowser,
    CameraFile,
    CameraProperty,
    Directory,
    ExposureCompensation,
    Flag,
    ImageQuality,
    ObjectEvent,
    Option,
    ShutterSpeed,
    StateEvent,
    Volume,
    /**
     * Global CameraBrowser instance
     * @type {CameraBrowser}
     */
    cameraBrowser,
    /**
     * Watch for camera events
     * @param {int} [timeout=1000]
     * @return {Function} stop
     */
    watchCameras
}
export default CameraApi;
