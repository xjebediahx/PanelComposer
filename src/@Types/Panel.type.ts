import Size from './Size.type';
import Point from './Point.type';

export default interface Panel {
    size: Size,
    position: Point,
    title: string,
    mvc?: string
}