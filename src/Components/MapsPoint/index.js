import Image from 'next/image';
import React from 'react';
import Point from '~/assets/icons/point.svg'

export function MapsPoint(){
    return(
        <Image src={Point} id="point"/>
    )
}