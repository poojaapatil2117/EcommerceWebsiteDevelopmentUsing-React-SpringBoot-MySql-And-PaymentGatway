// // ** MUI Imports
// import Box from '@mui/material/Box'
// import Card from '@mui/material/Card'
// import Avatar from '@mui/material/Avatar'
// import Typography from '@mui/material/Typography'
// import IconButton from '@mui/material/IconButton'
// import CardHeader from '@mui/material/CardHeader'
// import CardContent from '@mui/material/CardContent'

// // ** Icons Imports
// import ChevronUp from 'mdi-material-ui/ChevronUp'
// import ChevronDown from 'mdi-material-ui/ChevronDown'
// import DotsVertical from 'mdi-material-ui/DotsVertical'

// const data = [
//   {
//     sales: '894k',
//     trendDir: 'up',
//     subtitle: 'USA',
//     title: '$8,656k',
//     avatarText: 'US',

//     avatarColor: 'success',
   
//   },
//   {
//     sales: '645k',
//     subtitle: 'UK',
//     trendDir: 'down',
//     title: '$2,415k',
//     avatarText: 'UK',
  
//     avatarColor: 'error',
   
//   },
//   {
//     sales: '148k',
//     title: '$865k',
//     trendDir: 'up',
//     avatarText: 'IN',
//     subtitle: 'India',
   
//     avatarColor: 'warning',
    
//   },
//   {
//     sales: '86k',
//     title: '$745k',
//     trendDir: 'down',
//     avatarText: 'JA',
//     subtitle: 'Japan',
   
//     avatarColor: 'secondary',
    
//   },
//   {
//     sales: '42k',
//     title: '$45k',
//     trendDir: 'up',
//     avatarText: 'KO',
//     subtitle: 'Korea',
//     avatarColor: 'secondary',
  
//   }
// ]

// const SalesByCountries = () => {
//   return (
//     <Card>
//       <CardHeader
//         title='Sales by Countries'
//         titleTypographyProps={{ sx: { lineHeight: '1.2 !important', letterSpacing: '0.31px !important' } }}
//         action={
//           <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
//             <DotsVertical />
//           </IconButton>
//         }
//       />
//       <CardContent sx={{ pt: theme => `${theme.spacing(2)} !important` }}>
//         {data.map((item, index) => {
//           return (
//             <Box
//               key={item.title}
//               sx={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 ...(index !== data.length - 1 ? { mb: 5.61 } : {})
//               }}
//             >
//               <Avatar
//                 sx={{
//                   width: 38,
//                   height: 38,
//                   marginRight: 3,
//                   fontSize: '1rem',
//                   color: 'common.white',
//                   backgroundColor: `${item.avatarColor}.main`
//                 }}
//               >
//                 {item.avatarText}
//               </Avatar>

//               <Box
//                 sx={{
//                   width: '100%',
//                   display: 'flex',
//                   flexWrap: 'wrap',
//                   alignItems: 'center',
//                   justifyContent: 'space-between'
//                 }}
//               >
//                 <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
//                   <Box sx={{ display: 'flex' }}>
//                     <Typography sx={{ mr: 0.5, fontWeight: 600, letterSpacing: '0.25px' }}>{item.title}</Typography>
//                     <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                       {item.trend}
//                       <Typography
//                         variant='caption'
//                         sx={{
//                           fontWeight: 600,
//                           lineHeight: 1.5,
//                           color: item.trendDir === 'down' ? 'error.main' : 'success.main'
//                         }}
//                       >
//                         {item.trendNumber}
//                       </Typography>
//                     </Box>
//                   </Box>
//                   <Typography variant='caption' sx={{ lineHeight: 1.5 }}>
//                     {item.subtitle}
//                   </Typography>
//                 </Box>

//                 <Box sx={{ display: 'flex', textAlign: 'end', flexDirection: 'column' }}>
//                   <Typography sx={{ fontWeight: 600, fontSize: '0.875rem', lineHeight: 1.72, letterSpacing: '0.22px' }}>
//                     {item.sales}
//                   </Typography>
//                   <Typography variant='caption' sx={{ lineHeight: 1.5 }}>
//                     Sales
//                   </Typography>
//                 </Box>
//               </Box>
//             </Box>
//           )
//         })}
//       </CardContent>
//     </Card>
//   )
// }

// export default SalesByCountries
