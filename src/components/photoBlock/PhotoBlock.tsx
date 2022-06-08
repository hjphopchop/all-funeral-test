import React, { useState } from 'react'
import cl from "./PhotoBlock.module.scss"
import stone from "../../assets/img/photo/Stone.png";
import del from "../../assets/img/page/Delete.png";
import add from "../../assets/img/page/Add.png"
import Modal from '../modal/Modal';
import PhotoForm from '../forms/photoForm/PhotoForm';
import { useAppDispatch, useTypedSelector } from '../../hooks/store';
import { deleteImage } from '../../store/slices/imagesSlice';
import { Image, Images } from '../../types/images';

const PhotoBlock = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const allImages:any = useTypedSelector((state) => state.images.allImages)
  console.log(allImages);
  const handleDeletePhoto = (item:any) => {
    console.log("del")
    dispatch(deleteImage(item.url));
  }

  const handleOpen = () => {
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <div className={cl.photoBlock}>
          <p className={cl.photoTitle}>Приложенные фото</p>
          <div className={cl.photoItems}>
            <div className={cl.photo}>
              <img src={stone}></img>

              <p>Надгробный камень.jpg</p>
              <p>11 июня 2018</p>
            </div>
            {allImages && allImages.map((item:any) =>(
         
            
              <div key={item.url} className={cl.photo}>
              <img src={item}></img>
              <button onClick={handleDeletePhoto} className={cl.photoBtn}>
                <img src={del}></img>
              </button>

              <p>Надгробный камень.jpg</p>
              <p>11 июня 2018</p>
            </div>
              
            ))}
            
            
          </div>
          <button onClick={handleOpen} className={cl.button}><img src={add} />
          <span>
          
          Добавить изображение
          </span>
          </button>
          
          <Modal handleClose={handleClose} isOpen={isOpen}>
              <PhotoForm/>
        </Modal>
        </div>
  )
}

export default PhotoBlock