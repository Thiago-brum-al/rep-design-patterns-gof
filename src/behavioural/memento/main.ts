import { ImageEditor } from "./image-editor";
import { ImageEditorBackupManager } from "./image-editor-backup-manager";

const imageEditor = new ImageEditor('media/img.png', 'png');
const backupManager = new ImageEditorBackupManager(imageEditor);

backupManager.backup();
imageEditor.convertFormat('gif');
console.log(imageEditor);

backupManager.backup();
imageEditor.convertFormat('png');
console.log(imageEditor);

backupManager.backup();
imageEditor.convertFormat('jpg');
console.log(imageEditor);

backupManager.showMementos();