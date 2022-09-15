import {Box, Image, Text} from "@chakra-ui/react";


export const PortfolioCard = (props) => {

    return (
      <div className='border-[1px] border-black h-96 w-96'>
          <Image className='h-3/5 w-full object-cover' src={props.image}></Image>
          <Text className='m-2' fontSize='lg'>{props.name}</Text>
          <Text className='ml-2'fontSize='sm'>{props.desc}</Text>
          <button
              className="m-2 bg-transparent font-semibold hover:text-white py-2 px-4 border border-black rounded">
              View Project
          </button>

      </div>
    );

}