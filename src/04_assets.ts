import { MigrationModule } from "@kontent-ai/data-ops";
import { AssetFolderModels, ManagementClient, SharedContracts } from "@kontent-ai/management-sdk";
import * as fsPromises from "fs/promises";
import path from "path";

import { assetFoldersImagesExtId, assetKontentExternalId } from "./constants/externalIds.js";

const migration: MigrationModule = {
  order: 4,
  run: async client => {
    const assetFoldersData: AssetFolderModels.IAddAssetFoldersData = {
      folders: [
        { name: "Images", external_id: assetFoldersImagesExtId, folders: [] },
      ],
    };

    await client
      .addAssetFolders()
      .withData(assetFoldersData)
      .toPromise();

    await addAsset(client, {
      fileName: "kontent-ai.png",
      externalId: assetKontentExternalId,
      contentType: "image/png",
      collection: { codename: "default" },
    });
  },
  rollback: async client => {
    await client
      .modifyAssetFolders()
      .withData([{
        op: "remove",
        reference: { external_id: assetFoldersImagesExtId },
      }] as unknown as AssetFolderModels.IModifyAssetFolderData[])
      .toPromise();

    await client
      .deleteAsset()
      .byAssetExternalId(assetKontentExternalId)
      .toPromise();
  },
};

type AddAssetParams = Readonly<{
  fileName: string;
  externalId: string;
  contentType: string;
  collection: SharedContracts.IReferenceObjectContract;
  folderExternalId?: string;
  descriptions?: Readonly<Record<string, string>>;
}>;

const addAsset = async (client: ManagementClient, params: AddAssetParams) => {
  const binaryData = await fsPromises.readFile(path.resolve(process.cwd(), `./src/assets/${params.fileName}`));

  const fileRef = await client
    .uploadBinaryFile()
    .withData({
      filename: params.fileName,
      binaryData,
      contentType: params.contentType,
      contentLength: binaryData.length,
    })
    .toPromise()
    .then(res => res.data);

  return client
    .addAsset()
    .withData(() => ({
      external_id: params.externalId,
      folder: params.folderExternalId ? { external_id: params.folderExternalId } : undefined,
      collection: { reference: params.collection },
      file_reference: fileRef,
      descriptions: params.descriptions
        ? Object.entries(params.descriptions).map(([codename, description]) => ({
          language: { codename },
          description,
        }))
        : undefined,
    }))
    .toPromise()
    .then(res => res.data);
};

export default migration;
