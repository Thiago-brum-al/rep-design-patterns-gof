import type { ImageEditor } from "./image-editor";
import type { Memento } from "./memento";

export class ImageEditorBackupManager {

    private mementos: Memento[] = [];

    constructor(
        private readonly originator: ImageEditor
    ){};

    backup(): void {
        this.mementos.push(this.originator.save());
        console.log(`Saving (BACKUP)...`);
    };
    
    undo(): void {
        const memento = this.mementos.pop();
        if(!memento){
            console.log(`BACKUP: Not Found`);
            return;
        };

        this.originator.restore(memento);
        console.log(`BACKUP: ${memento.getName()} restored`);
    };

    showMementos(): void {
        for(const m of this.mementos){
            console.log(m);
        };
    }
};