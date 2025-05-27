import styled from "styled-components";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { HiSpeakerWave } from "react-icons/hi2";
import { VscTypeHierarchy } from "react-icons/vsc";

const Title = styled.h2`
  color: #000;
`;
const EventContainer = styled.div`
  background-color: rgba(255, 251, 142, 0.8);
  border: 2px solid rgba(166, 183, 43, 0.53);
  width: 340px;
  border-radius: 15px;
`;
const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export default function Event({ name, location, speaker, type, start, end }) {
  return (
    <>
      <EventContainer className="event-container">
        
        <Flex>

            <MdDriveFileRenameOutline />
        <Title>{name}</Title>
        </Flex>

        <Flex>
            <MdLocationOn />
          <p>location: {location}</p>
        </Flex>

        <Flex>
            <HiSpeakerWave />
          <p>speaker: {speaker}</p>
        </Flex>

        <Flex>
            <VscTypeHierarchy />
          <p>type: {type}</p>
        </Flex>

        <Flex>
          <IoMdTime />
          <p>start: {start}</p>
        </Flex>

        <Flex>
          <IoMdTime />
          <p>end: {end}</p>
        </Flex>
      </EventContainer>
    </>
  );
}
