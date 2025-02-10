
import Image from 'next/image'
import Logo from '../../../public/Images/Logo.svg'
import { Box } from '@mui/material'
import Tipografia_inicio from '@/Components/Typhograpy/Tipografia_Inicio'
export function Header ( ) {
   return(
      <Box sx={{
         display:'grid',
         justifyContent:'center',
         alignItems:'center',
         borderInline: 1
         
      }}>
       <Image src={Logo} alt={'Logo'}  />
        <Box sx={{
         display:'flex',
         justifyContent:'center',
        textAlign:'justify',
        alignItems:'center'
        }}>
         <Tipografia_inicio/>
        </Box>
   </Box>
   );
} 