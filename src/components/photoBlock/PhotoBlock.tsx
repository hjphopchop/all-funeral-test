import React from 'react'
import cl from "./PhotoBlock.module.scss"
import stone from "../../assets/img/photo/Stone.png";
import del from "../../assets/img/page/Delete.png";
import add from "../../assets/img/page/Add.png"

const PhotoBlock = () => {
  return (
    <div className={cl.photoBlock}>
          <p className={cl.photoTitle}>Приложенные фото</p>
          <div className={cl.photoItems}>
            <div className={cl.photo}>
              <img src={stone}></img>
              <button className={cl.photoBtn}>
                <img src={del}></img>
              </button>

              <p>Надгробный камень.jpg</p>
              <p>11 июня 2018</p>
            </div>

            <div className={cl.photo}>
              <img src={stone}></img>
              <button className={cl.photoBtn}>
                <img src={del}></img>
              </button>

              <p>Надгробный камень.jpg</p>
              <p>11 июня 2018</p>
            </div>
            <div className={cl.photo}>
              <img src={stone}></img>
              <button className={cl.photoBtn}>
                <img src={del}></img>
              </button>

              <p>Надгробный камень.jpg</p>
              <p>11 июня 2018</p>
            </div>
          </div>
          <button  className={cl.button}><img src={add} /> <span>Добавить изображение</span></button>
        </div>
  )
}

export default PhotoBlock