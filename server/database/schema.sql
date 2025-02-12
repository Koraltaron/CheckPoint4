create table user(
  id int primary key auto_increment not null,
  mail varchar(100) not null unique,
  password varchar(200) not null,
  nickname varchar(80) not null
);

create table gamecharacter(
  id int primary key auto_increment not null,
  name varchar(80) not null unique,
  role varchar(80) not null,
  image varchar(200),
  status varchar(80),
  vital_points int not null,
  mana_points int not null,
  initiative_score int not null,
  description text
);

insert into gamecharacter(name, role, image, status, vital_points, mana_points, initiative_score, description) 
VALUES ("Oswald", "allié", "https://www.aidedd.org/assets/adj/pretires/img/roublard-humain.jpg", "vivant", 30, 3, 22, "Assassin humain mystérieux"),
("John Doe", "allié", "https://www.aidedd.org/assets/adj/pretires/img/paladin-humain.jpg", "vivant", 40, 12, 5, "Paladin de la lumière"),
("Silvio", "allié", "https://static.wikia.nocookie.net/wow/images/3/3a/Orgrim_Doomhammer.jpg/revision/latest?cb=20140303173504&path-prefix=fr", "vivant", 32, 10, 18, "Orc chaman vindicatif");

create table manage(
  id int primary key auto_increment not null,
  modification_date date not null,
  user_id int not null,
  foreign key (user_id)
  references user(id),
  gamecharacter_id int not null,
  foreign key (gamecharacter_id)
  references gamecharacter(id)
);






