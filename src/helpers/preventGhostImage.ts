export default (event :DragEvent) => {
    const img = new Image();
    
    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
    if (event.dataTransfer) {
        event.dataTransfer.setDragImage(img, 0, 0);
    }
} 