import React, { useEffect, useState } from 'react'
import dataValue from '../data.json'
import PopUp from './PopUp'
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  TableContainer,
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import { Link } from 'react-router-dom'
import ImageModal from '../ImageModal'
import './table.css'

export default function TableData() {

  const [input, setInput] = useState(dataValue?.data)
  const [surnName, setSurnName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [id, setId] = useState('')
  const [country, setCountry] = useState('')
  
  const handleSearch = (searchResult) => {
    setInput([searchResult])
  }


  const tableHead =(data) => {
    return (
      <>
        <TableContainer className="mb-8 h-[20%] w-full ">
          <Table className="  ">
            <TableHead>
              <tr className=" gap-2  ">
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  ID
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Action
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Date activation
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Gender
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  ActiveStatus
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Deceerd
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  BirthPlace
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Address_line
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Address_city
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Address_country
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  NameType
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  FirstName
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  middleName
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Surnname
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  medianName
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Suffix
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  option
                </TableCell>
              </tr>
            </TableHead>
            <TableBody>
              {input?.map((x, key) => (
                <TableRow className="w-[90%] " key={key}>
                  <TableCell className="w-[20px]">
                    <span className="text-sm w-[20px] ">{x?.id}</span>
                  </TableCell>
                  <TableCell className="w-[20px]">
                    <span className="text-sm">{x?.action}</span>
                  </TableCell>
                  <TableCell className="w-[20px]">
                    <span className="text-sm">{x?.date_activation}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.gender}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.active_status}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.deceerd}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.birth_place}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.address_line}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.address_city}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.address_country}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.name_type}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.first_name}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.middle_name}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.Surnname}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.medianName}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.suffix}</span>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-3 items-center cursor-pointer ">
                      <img
                        src="https://i.ibb.co/m0C7yh7/grid.png"
                        className="h-[25px] w-[25px]"
                        alt=""
                      />
                      {/* <img
                        src="https://i.ibb.co/7yjxWSv/share.png"
                        className="h-[15px] w-[15px]"
                        alt=""
                      /> */}
                      <ImageModal />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    )
  }

  const tableHead2 =(data) => {
    return (
      <>
        <TableContainer className="mb-8 h-[15%]">
          <Table>
            <TableHead>
              <tr>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  ID
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Doc Type
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Value
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Notes
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  id
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  DeceerdID
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Description
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  id
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Country Type
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Country Code
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Name
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  islecopy
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  ph code
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  id
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Date type
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Date
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Date PM
                </TableCell>
              </tr>
            </TableHead>
            <TableBody>
              {input?.map((x, key) => (
                <TableRow key={key}>
                  <TableCell>
                    <span className="text-sm">{x?.id}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.doc_type}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.value}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.notes}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.id}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.deceerd_id}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.description}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.id}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.country_type}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.country_code}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.name}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.islecopy}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.ph_code}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.id}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.date_type}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.date}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.date_pm}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    )
  }


  const tableHead3 =(data) => {
    return (
      <>
        <TableContainer className="mb-8 h-[15%]">
          <Table>
            <TableHead>
              <tr>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  ID
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  List Code
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Start Date
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Date Stop
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Name
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Status
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  RT
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Descr2
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Descr1
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  id
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  RoleType
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Start date
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Stop date
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Code
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Name
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Take
                </TableCell>
              </tr>
            </TableHead>
            <TableBody>
              {input?.map((x, key) => (
                <TableRow key={key}>
                  <TableCell>
                    <span className="text-sm">{x?.id}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.list_code}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.start_date}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.stop_date}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.name}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.status}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.rt}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.descr2}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.descr1}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.id}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.role__type}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.start_date}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.stop_date}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.code}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.name}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.take}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    )
  }

  const tableHead4 =(data) => {
    return (
      <>
        <TableContainer className="mb-8 h-[15%]">
          <Table>
            <TableHead>
              <tr>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  ID
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Assoc Id
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Ex{' '}
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Type
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Red Name
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Action
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Date action
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Gender
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  ActiveStatus
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Deceased
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Address_line
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Address_City
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Address_Country
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  NameType
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Tickhoc
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  BirthPlace
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  FirstName
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  middleName
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Surnname
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  medianName
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  Surffix
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  SinglarName
                </TableCell>
                <TableCell className="w-[] border-2 space-x-8 border-gray-400 ">
                  option
                </TableCell>
              </tr>
            </TableHead>
            <TableBody>
              {input?.map((x, key) => (
                <TableRow key={key}>
                  <TableCell>
                    <span className="text-sm">{x?.id}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.assoc_id}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.ex}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.type}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.red_name}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.action}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.date_action}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.gender}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.active_status}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.deceased}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.address_line}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.address_city}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.address_country}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.name_type}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.tickhoc}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.birth_place}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.first_name}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.middle_name}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.Surnname}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.medianName}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.suffix}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.singlar_name}</span>
                  </TableCell>

                  <TableCell>
                    <div className="flex gap-3 items-center cursor-pointer ">
                      <img
                        src="https://i.ibb.co/m0C7yh7/grid.png"
                        className="h-[25px] w-[25px]"
                        alt=""
                      />
                      <img
                        src="https://i.ibb.co/7yjxWSv/share.png"
                        className="h-[15px] w-[15px]"
                        alt=""
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    )
  }


  useEffect(() => {}, [input])


  return (
    <div className="h-screen ">
      <div className=" flex flex-ro items-center justify-around bg-black">
        <div className="">
          <Link to="/"> {<HomeIcon />} </Link>
        </div>
        <div className="">
          <PopUp
            setSurnName={setSurnName}
            setId={setId}
            setMiddleName={setMiddleName}
            setCountry={setCountry}
            setFirstName={setFirstName}
            surnName={surnName}
            firstName={firstName}
            id={id}
            middleName={middleName}
            country={country}
            input={input}
            setInput={setInput}
            handleSearch={handleSearch}
          />
        </div>
      </div>

      {/* Table 1 */}
      <div className="h-screen">
        <div className=" flex  items-left  bg-purple-200">
          <h4 className="m-3">Person</h4>
        </div>

        {tableHead()}

        {/* Table 2 */}
        <div className=" flex items-left  bg-purple-200">
          <div className="w-1/5 border-r-4 ml-7">
            <div className="flex justify-between  items-center">
              <h4 className="m-3">Numbers</h4>
              <div className="border-2 bg-white w-[30px] h-[30px]"></div>
            </div>
          </div>
          <div className="w-1/5 border-r-4 ">
            <div className="flex justify-between  items-center">
              <h4 className="m-3">Description</h4>
              <div className="border-2 bg-white w-[30px] h-[30px]"></div>
            </div>
          </div>
          <div className="w-2/5 border-r-4  ">
            <div className="flex justify-between  items-center">
              <h4 className="m-3">Countries</h4>
              <div className="border-2 bg-white w-[30px] h-[30px]"></div>
            </div>
          </div>
          <div className="w-1/5 border-r-4  ">
            <div className="flex justify-between  items-center">
              <h4 className="m-3">Dates</h4>
              <div className="border-2 bg-white w-[30px] h-[30px]"></div>
            </div>
          </div>
        </div>

        {tableHead2()}

        {/* Table 3 */}
        <div className=" flex items-left   bg-purple-200">
          <div className="w-2/5 ml-7 border-r-4  ">
            <div className="flex justify-between  items-center">
              <h4 className="m-3">Saction</h4>
              <div className="border-2 bg-white w-[30px] h-[30px]"></div>
            </div>
          </div>
          <div className="w-3/5">
            <div className="flex justify-between  items-center">
              <h4 className="m-3">Role</h4>
              <div className="border-2 bg-white w-[30px] h-[30px]"></div>
            </div>
          </div>
        </div>

        {tableHead3()}

        {/* Table 4 */}
        <div className=" flex  items-left  bg-purple-200">
          <h4 className="m-3">Associates</h4>
        </div>

        {tableHead4()}
      </div>
    </div>
  )
}
