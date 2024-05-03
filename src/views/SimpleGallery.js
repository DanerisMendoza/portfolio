import React, { useEffect, useRef } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveIndex, setIsFullScreen } from '../store/portfolio/fullscreen';

export default function SimpleGallery(props) {
    const lightboxRef = useRef(null);
    const fullscreenReducer = useSelector((state) => state.fullscreenReducer);
    const activeIndex = fullscreenReducer.activeIndex;
    const isFullScreen = fullscreenReducer.isFullScreen;
    const dispatch = useDispatch();

    const initLightBox = () => {
        const lightbox = new PhotoSwipeLightbox({
            gallery: '#' + props.galleryID,
            children: 'a',
            pswpModule: () => import('photoswipe'),
        });
        lightboxRef.current = lightbox;
        lightbox.init();

        
        lightbox.on('destroy', () => {
            dispatch(setIsFullScreen(false))
        });
        lightbox.on('change', () => {
            dispatch(setActiveIndex(lightbox.pswp.potentialIndex))
        });

        return () => {
            lightbox.destroy();
        };
    }
   
    useEffect(() => {
        if (isFullScreen) {
            initLightBox()
            lightboxRef.current.loadAndOpen(activeIndex);
        }
    }, [isFullScreen]);
    


    return (
        <div className="pswp-gallery" id={props.galleryID}>
            {props.images.map((image, index) => (
                <a
                    href={image.largeURL}
                    data-pswp-width={image.width}
                    data-pswp-height={image.height}
                    key={props.galleryID + '-' + index}
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={image.thumbnailURL} alt="" />
                </a>
            ))}
        </div>
    );
}
