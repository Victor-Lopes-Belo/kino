import React, { Children, cloneElement, JSX } from 'react'
import Wrap from './Wrap';
import Container from './Container';
import mergeClasses from '@/Utils/mergeClasses';
import Flex from './Flex';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

export interface CarroselProps {
    children: JSX.Element[];
    slideAutomatico?: boolean;
}

const Carrosel = ({children, slideAutomatico} : CarroselProps) => {
    
    const indiceAtual = 0;
    const NUMERO_DE_ITENS = children.length;

  return (
    <div>
        <Wrap>
            <Container>
                <Wrap>
                    <div className='relative rounded-b-lg mb-5'>
                        {Children.map(children, (filho: JSX.Element, i) => 
                                {
                                    const propsFilho = filho.props;
                                    return cloneElement(filho, {
                                        className: `${i === indiceAtual? "": "hidden"}`
                                    })
                                }
                            )
                        }
                    </div>
                    <Flex className='abolute bottom-5 left-1/2 z-30 translate-x-1/2 gap-2'>
                        {Array.from({length: NUMERO_DE_ITENS},).map((_, i) => {
                            return (
                                <button key={i} 
                                    className={mergeClasses("h-3 w-3 rounded-full bg-gray-800",
                                    {"bg-gray-500": i === indiceAtual})}>
                                </button>)
                        })}
                    </Flex>
                </Wrap>
            </Container>
            <button className={`{group absolute left-0 top-0 flex h-full
                cursor-pointer items-center justify-center px-4 focus:outline-none}`}>
                <span className='`{inline-flex h-10 w-10 items-center justify-center 
                    rounded-full bg-gray-800 group-hover:bg-gray-700}'>
                    <CaretLeft size={20}/>
                    <span className="hidden">Anterior</span>
                </span>
            </button>
        </Wrap> 
    
    </div>
  )
}

export default Carrosel