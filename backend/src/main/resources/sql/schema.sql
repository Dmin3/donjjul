create table member
(
    member_id     varchar(255) not null
        primary key,
    member_type   varchar(255) null,
    nickname      varchar(50)  null,
    profile_image text         null
);

create table board
(
    id          bigint auto_increment
        primary key,
    created_at  datetime(6)  not null,
    modified_at datetime(6)  not null,
    content     text         not null,
    title       varchar(255) not null,
    member_id   varchar(255) null,
    constraint FKsds8ox89wwf6aihinar49rmfy
        foreign key (member_id) references member (member_id)
);

create table image
(
    id        bigint auto_increment
        primary key,
    image_url varchar(2048) not null,
    priority  int           null,
    board_id  bigint        null,
    constraint FKil875c0myaxwwf0hty0u1ej2d
        foreign key (board_id) references board (id)
);

create table likes
(
    id          bigint auto_increment
        primary key,
    created_at  datetime(6)  not null,
    modified_at datetime(6)  not null,
    board_id    bigint       null,
    member_id   varchar(255) null,
    constraint FK5cq36196j3ww17d7r95qdm4td
        foreign key (board_id) references board (id),
    constraint FKa4vkf1skcfu5r6o5gfb5jf295
        foreign key (member_id) references member (member_id)
);

create table comment
(
    id          bigint auto_increment
        primary key,
    created_at  datetime(6)  not null,
    modified_at datetime(6)  not null,
    content     text         not null,
    board_id    bigint       null,
    member_id   varchar(255) null,
    constraint FKlij9oor1nav89jeat35s6kbp1
        foreign key (board_id) references board (id),
    constraint FKmrrrpi513ssu63i2783jyiv9m
        foreign key (member_id) references member (member_id)
);

create table store
(
    id             bigint auto_increment
        primary key,
    name           varchar(50)  null,
    industry_name  varchar(10)  null,
    city           varchar(255) not null,
    street_address varchar(255) null,
    ground_address varchar(255) null,
    detail_address varchar(255) null,
    open_time      varchar(255) null,
    provided_item  varchar(255) null,
    provided_1     varchar(255) null,
    provided_2     varchar(255) null,
    zip_code       varchar(255) null,
    latitude       double       null,
    longitude      double       null
);











