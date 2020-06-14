import {Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn} from 'typeorm';

@Entity('ad_pets')
class Ad {
  @PrimaryGeneratedColumn('uuid')  
  id: string;

  @Column()
  image: string;

  @Column()
  email: string;

  @Column()
  whatsapp: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  city: string;

  @Column()
  uf: string;

  @Column('integer')
  latitude: number;

  @Column('integer')
  longitude: number;
  
}

export default Ad;