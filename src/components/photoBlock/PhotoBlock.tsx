import React, { useState } from "react";
import cl from "./PhotoBlock.module.scss";
import del from "../../assets/img/page/Delete.png";
import add from "../../assets/img/page/Add.png";
import Modal from "../modal/Modal";
import PhotoForm from "../forms/otherForms/PhotoForm";
import { useAppDispatch, useTypedSelector } from "../../hooks/store";
import { deleteImage } from "../../store/slices/imagesSlice";

const PhotoBlock = ({photos}:any) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const allImages: any = useTypedSelector((state) => state.images.allImages);
  console.log(allImages);
  console.log(allImages[0]);
  console.log(photos);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className={cl.photoBlock}>
      <p className={cl.photoTitle}>Приложенные фото</p>
      <div className={cl.photoItems}>
        <div className={cl.photo}>
          {photos && photos.map((photo:any) => (
            <>
            <img src={photo.thumbpath} alt={photo.name}></img>

<p>Надгробный камень.jpg</p>
<p>11 июня 2018</p>
            </>
          ))}
          
        </div>

        {allImages &&
          allImages.map((item: any, i: number) => (
            <div key={item[i]} className={cl.photo}>
              <img src={item} alt='фото'></img>
              <button
                onClick={() => dispatch(deleteImage(item))}
                className={cl.photoBtn}
              >
                <img src={del} alt="del"></img>
              </button>

              <p>Надгробный камень.jpg</p>
              <p>11 июня 2018</p>
            </div>
          ))}
      </div>
      <button onClick={handleOpen} className={cl.button}>
        <img src={add} alt="add" />
        <span>Добавить изображение</span>
      </button>

      <Modal handleClose={handleClose} isOpen={isOpen}>
        <PhotoForm />
      </Modal>
    </div>
  );
};

export default PhotoBlock;
