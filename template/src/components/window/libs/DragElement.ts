/*
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2021-08-04 10:21:50
 * @Description: 实现可移动Object
 * @FilePath: /myindex/src/components/window/libs/DragElement.ts
 */
interface DragObjInter {
    posX: number,
    posY: number,
}
class DragObj implements DragObjInter {
    posX: number;
    posY: number;
    posStartX: number;
    posStartY: number;
    startX: number;
    startY: number;

    notify: Function;
    constructor(x: number, y: number) {
        this.posX = x;
        this.posY = y;
        this.startX = 0;
        this.startY = 0;
        this.posStartX = 0;
        this.posStartY = 0;
        this.notify = () => { };
    }
    onMoving(offsetX: number, offsetY: number) {
        this.posX = this.posStartX + offsetX - this.startX;
        this.posY = this.posStartY + offsetY - this.startY;

        this.notify(this.posX, this.posY)
    }
    startMove(startX: number, startY: number) {
        this.startX = startX;
        this.startY = startY;
        this.posStartX = this.posX;
        this.posStartY = this.posY;
    }
    onDrag(fun: (a0: number, a1: number) => void) {
        this.notify = fun;
    }
}

class DragElement extends DragObj {
    e: HTMLElement;
    ifDraging: boolean;
    constructor(x: number, y: number, element: HTMLElement) {
        super(x, y);
        this.e = element;
        this.ifDraging = false;
        this.e.style.left = this.posX + 'px';
        this.e.style.top = this.posY + 'px'
        this.e.addEventListener('mousedown', (ev) => {
            this.startMove(ev.pageX, ev.pageY);

            this.ifDraging = true;
        })
        document.body.addEventListener('mouseup', (ev) => {
            this.ifDraging = false;
        })
        document.body.addEventListener('mousemove', (ev) => {
            
            if (this.ifDraging&&ev.buttons==1) {

                this.onMoving(ev.pageX, ev.pageY);
                this.e.style.left = this.posX + 'px';
                this.e.style.top = this.posY + 'px'
            }else if(this.ifDraging&&ev.buttons==0){
                this.ifDraging=false

            }
        })
    }
}

export {
    DragElement
}