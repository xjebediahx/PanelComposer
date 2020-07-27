import Size from './Size.type';
import Point from './Point.type';

export default class Panel {
    key: string;
    size?: Size;
    position?: Point;
    title?: string;
    mvc?: string;

    constructor() {
        this.key = btoa(`${Math.round((new Date()).getTime() / 1000)}`);
    }
}