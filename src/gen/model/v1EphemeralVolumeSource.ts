/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.20.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { V1PersistentVolumeClaimTemplate } from './v1PersistentVolumeClaimTemplate';

/**
* Represents an ephemeral volume that is handled by a normal storage driver.
*/
export class V1EphemeralVolumeSource {
    /**
    * Specifies a read-only configuration for the volume. Defaults to false (read/write).
    */
    'readOnly'?: boolean;
    'volumeClaimTemplate'?: V1PersistentVolumeClaimTemplate;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean"
        },
        {
            "name": "volumeClaimTemplate",
            "baseName": "volumeClaimTemplate",
            "type": "V1PersistentVolumeClaimTemplate"
        }    ];

    static getAttributeTypeMap() {
        return V1EphemeralVolumeSource.attributeTypeMap;
    }
}
