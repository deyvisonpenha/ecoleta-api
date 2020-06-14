import Ad from '../models/Ad';
import {getRepository, Repository, EntityRepository} from 'typeorm';
import ImterfaceAdsRepository from './ImterfaceAdsRepository';

@EntityRepository(Ad)
class AdRepository {
  private ormRepositoryAd: Repository<Ad>;

  constructor(){
    this.ormRepositoryAd = getRepository(Ad);
  }

  public async all(): Promise<Ad[]>{
    const ads_pet = await this.ormRepositoryAd.find();
    return ads_pet;
  }

  public async create(
      {image, email, whatsapp, title, description, 
        city, uf, latitude, longitude}: ImterfaceAdsRepository): Promise<Ad>{

    const ads = this.ormRepositoryAd.create({image, email, whatsapp, title, description, city, uf, latitude, longitude});

    await this.ormRepositoryAd.save(ads);

    return ads;
  }

}

export default AdRepository;