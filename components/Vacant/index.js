import Link from 'next/link'
import Image from 'next/image'
import {
  Card,
  Header,
  Content
} from './Styled'
import { formatDate } from '../../helpers';

const Vacant = ({ vacant }) => {
  const {
    id,
    title,
    description,
    available,
    published_at,
    job
  } = vacant;
  
  const { 
    title: titleJob,
    image
  } = job;

  return (
    <Card>

      <Header>
        <Image
          className='header__image'
          src={image.url}
          alt={`Imagen de ${titleJob.toLowerCase()}`}
          width={1920}
          height={1080}
          layout="responsive"
        />
        <div className='header__bottom'>
          <p className={'header__available header__available'+(!available ? '--red' : '--green')}>
            Vacante <span>{!available ? "no disponible" : "disponible"}</span>
          </p>
        </div>
      </Header>

      <Content>

        <p className='content__date'>
          {`Publicado el ${formatDate(published_at)}`}
        </p>
        <h3 className='content__title'>
          {title}
        </h3>
        <p className='content__job'>
          {titleJob}
        </p>
        <p className='content_description'>
          {description}
        </p>

        <button className='content__button'>
          <Link href={`/vacant/${id}`}>
            Ver más
          </Link>
          <span>&rarr;</span>
        </button>
        
      </Content>

    </Card>
  );
};

export default Vacant;