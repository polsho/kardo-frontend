import React, { useState } from 'react'
import styles from "./createPost.module.css";
import { SubHeader } from '../../components/subHeader/subHeader'
import { Button } from '../../components/button/button'
import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import { Input } from '../../components/input/input'
import { v4 as uuidv4 } from 'uuid'
import upload from '../../assets/icons/upload.svg'

export const CreatePost: React.FC = () => {

  const [description, setDescription] = useState('');

  // const [file, setFile] = useState();

  const navigate = useNavigate();

  const categories = ['Kickscootering', 'Breaking', 'Parkour', 'Freerunning',
    'Workout', 'Hip-hop', 'Graffiti', 'Djing', 'Tricking', 'Skateboarding', 'BMX'];

  return (
    <div className={styles.page_container}>
      <SubHeader title="Сегодня я хочу поделиться..." />

      <div className={styles.input_container}>
        <Input type="text" name="description" required htmlFor="Название" value={description}
               placeholder="Введите название"
               onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                 setDescription(event.target.value)
               }} />

        <p className={clsx(styles.input_subtitle, "text_type_main-small")}>0/30 символов</p>
      </div>

      <div>
        <h2 className={clsx(styles.subtitle, "text_type_secondary_main")}>Выберите категорию</h2>

        <div className={clsx(styles.category_container, 'text_type_main-default')}>
          {categories.map(category => <div key={uuidv4()} className={styles.category}>{category}</div>)}
        </div>
      </div>

        <form className={styles.loading_area} id="upload-container" encType="multipart/form-data" method="POST">

          <input id="file-input" type="file" accept="image/*,video/*" name="file" multiple
                 // onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                 //   setFile(event.target.value);
                 //   console.log(file);
                  //функция получения значения загруженного файла
                 // }}
          />
          <label className={styles.label} htmlFor="file-input">
            <img src={upload} alt="иконка загрузить файл" />
            Загрузить фото или видео
          </label>


          <div className={styles.button_container}>
            <Button className={styles.button} onClick={() => {
              navigate(`/newsFeed/myPosts`)
              // dispatch(newPost);
            }}>
              Создать публикацию
            </Button>
          </div>
        </form>
    </div>
  )
}