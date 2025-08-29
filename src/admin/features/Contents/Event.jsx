// "use client";

// import React, { useState } from "react";
// import { Calendar, momentLocalizer, Event } from "react-big-calendar";
// import moment from "moment";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import {
//   Box,
//   Button,
//   Drawer,
//   Input,
//   VStack,
//   Heading,
//   FormLabel,
//   CloseButton,
//   Portal,
// } from "@chakra-ui/react";

// const localizer = momentLocalizer(moment);

 
// export default function FullPageScheduler() {
//   const [events, setEvents] = useState ([
//     {
//       id: 1,
//       title: "Team Meeting",
//       start: new Date(),
//       end: new Date(moment().add(1, "hours").toDate()),
//     },
//   ]);

//   const [newEvent, setNewEvent] = useState({
//     title: "",
//     start: new Date(),
//     end: new Date(),
//   });

//   const handleAddEvent = () => {
//     if (!newEvent.title) return;
//     setEvents([
//       ...events,
//       { id: events.length + 1, title: newEvent.title, start: newEvent.start, end: newEvent.end },
//     ]);
//   };

//   return (
//     <Box display="flex" h="100vh" w="100vw">
//       {/* Left Sidebar */}
//       <Box
//         w="260px"
//         bg="gray.100"
//         borderRight="1px solid"
//         borderColor="gray.200"
//         p={6}
//       >
//         <Heading size="md" mb={6}>
//           Scheduler
//         </Heading>

//         <Drawer.Root placement="left">
//           <Drawer.Trigger asChild>
//             <Button colorScheme="blue" w="full">
//               + Create New Event
//             </Button>
//           </Drawer.Trigger>

//           <Portal>
//             <Drawer.Backdrop />
//             <Drawer.Positioner>
//               <Drawer.Content>
//                 <Drawer.Header>
//                   <Drawer.Title>Add New Event</Drawer.Title>
//                 </Drawer.Header>

//                 <Drawer.Body>
//                   <VStack spacing={4} align="stretch">
//                     <Box>
//                       <FormLabel>Event Title</FormLabel>
//                       <Input
//                         placeholder="Enter title"
//                         value={newEvent.title}
//                         onChange={(e) =>
//                           setNewEvent({ ...newEvent, title: e.target.value })
//                         }
//                       />
//                     </Box>
//                     <Box>
//                       <FormLabel>Start Date & Time</FormLabel>
//                       <Input
//                         type="datetime-local"
//                         onChange={(e) =>
//                           setNewEvent({
//                             ...newEvent,
//                             start: new Date(e.target.value),
//                           })
//                         }
//                       />
//                     </Box>
//                     <Box>
//                       <FormLabel>End Date & Time</FormLabel>
//                       <Input
//                         type="datetime-local"
//                         onChange={(e) =>
//                           setNewEvent({
//                             ...newEvent,
//                             end: new Date(e.target.value),
//                           })
//                         }
//                       />
//                     </Box>
//                   </VStack>
//                 </Drawer.Body>

//                 <Drawer.Footer>
//                   <Button variant="outline">Cancel</Button>
//                   <Button colorScheme="blue" onClick={handleAddEvent}>
//                     Add Event
//                   </Button>
//                 </Drawer.Footer>

//                 <Drawer.CloseTrigger asChild>
//                   <CloseButton size="sm" />
//                 </Drawer.CloseTrigger>
//               </Drawer.Content>
//             </Drawer.Positioner>
//           </Portal>
//         </Drawer.Root>
//       </Box>

//       {/* Right Calendar */}
//       <Box flex="1" p={4}>
//         <Calendar
//           localizer={localizer}
//           events={events}
//           startAccessor="start"
//           endAccessor="end"
//           style={{ height: "100%" }}
//         />
//       </Box>
//     </Box>
//   );
// }
