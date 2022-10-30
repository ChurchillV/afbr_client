import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
// import InfoIcon from '@mui/icons-material/Info';

const default_name = 'Unnamed'

export default function NewlyImageGallery()
{
    return (
        <ImageList sx={{ width: "auto", height: "auto" }}>
            <ImageListItem key="Subheader" cols={2}>
                <ListSubheader component="div" className='bg-light border-dark'>Newly Registered</ListSubheader>
            </ImageListItem>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item.title}
                        subtitle={item.author}
                        actionIcon={
                            <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                aria-label={`info about ${item.title}`}
                            >
                                {/* <InfoIcon /> */}
                            </IconButton>
                        }
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

const itemData = [
    {
        img: 'https://res.cloudinary.com/daurieb51/image/upload/v1659038540/africanbullystyles_frika_r1awjf.jpg',
        title: 1,
        author: '@bkristastucchio',
        // rows: 2,
        // cols: 2,
        featured: true,
    },
    {
        img: 'https://res.cloudinary.com/daurieb51/image/upload/v1659045906/b5wmengzhnbtc6tb2tc5.jpg',
        title: 2,
        author: '@rollelflex_graphy726',
    },
    {
        img: 'https://res.cloudinary.com/daurieb51/image/upload/v1659038540/africanbullystyles_frika_r1awjf.jpg',
        title: 3,
         author: '@helloimnik',
    },
    {
        img: 'https://res.cloudinary.com/daurieb51/image/upload/v1666646714/o4juyxmgery0cabfnsbg.jpg',
        title: 4,
        author: '@nolanissac',
        // cols: 2,
    },
    {
        img: 'https://res.cloudinary.com/daurieb51/image/upload/v1667147413/WhatsApp_Image_2022-10-25_at_17.14.13_qtapar.jpg',
        title: 5,
        author: '@hjrc33',
        // cols: 2,
    },
    {
        img: 'https://res.cloudinary.com/daurieb51/image/upload/v1667147413/WhatsApp_Image_2022-10-25_at_15.50.40_pi84vi.jpg',
        title: 6,
        author: '@arwinneil',
        // rows: 2,
        // cols: 2,
        featured: true,
    },
    {
        img: 'https://res.cloudinary.com/daurieb51/image/upload/v1667147413/WhatsApp_Image_2022-10-25_at_17.14.28_bkgxbn.jpg',
        title: 7,
        author: '@tjdragotta',
    },
    {
        img: 'https://res.cloudinary.com/daurieb51/image/upload/v1667147413/WhatsApp_Image_2022-10-25_at_17.14.23_lygasd.jpg',
        title: 8,
        author: '@katie_wasserman',
    },
    // {
    //     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    //     title: 'Mushrooms',
    //     author: '@silverdalex',
    //     rows: 2,
    //     cols: 2,
    // },
    // {
    //     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    //     title: 'Tomato basil',
    //     author: '@shelleypauls',
    // },
    // {
    //     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    //     title: 'Sea star',
    //     author: '@peterlaster',
    // },
    // {
    //     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    //     title: 'Bike',
    //     author: '@southside_customs',
    //     cols: 2,
    // },
];
