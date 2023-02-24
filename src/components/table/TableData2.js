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
import LinkModal from '../LinkModal'

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
        <TableContainer className="mb-8 h-[20%]">
          <Table>
            <TableHead>
              <tr>
                <TableCell>ID</TableCell>
                <TableCell>Action</TableCell>
                <TableCell>Date activation</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>ActiveStatus</TableCell>
                <TableCell>Deceerd</TableCell>
                <TableCell>BirthPlace</TableCell>
                <TableCell>Address_line</TableCell>
                <TableCell>Address_city</TableCell>
                <TableCell>Address_country</TableCell>
                <TableCell>NameType</TableCell>
                <TableCell>FirstName</TableCell>
                <TableCell>middleName</TableCell>
                <TableCell>Surnname</TableCell>
                <TableCell>medianName</TableCell>
                <TableCell>Suffix</TableCell>
                <TableCell>option</TableCell>
              </tr>
            </TableHead>
            <TableBody>
              {input?.map((x, key) => (
                <TableRow key={key}>
                  <TableCell>
                    <span className="text-sm">{x?.id}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{x?.action}</span>
                  </TableCell>
                  <TableCell>
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
                      <LinkModal />
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
                <TableCell>ID</TableCell>
                <TableCell>Doc Type</TableCell>
                <TableCell>Value</TableCell>
                <TableCell>Notes</TableCell>
                <TableCell>id</TableCell>
                <TableCell>DeceerdID</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>id</TableCell>
                <TableCell>Country Type</TableCell>
                <TableCell>Country Code</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>islecopy</TableCell>
                <TableCell>ph code</TableCell>
                <TableCell>id</TableCell>
                <TableCell>Date type</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Date PM</TableCell>
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
                <TableCell>ID</TableCell>
                <TableCell>List Code</TableCell>
                <TableCell>Start Date</TableCell>
                <TableCell>Date Stop</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>RT</TableCell>
                <TableCell>Descr2</TableCell>
                <TableCell>Descr1</TableCell>
                <TableCell>id</TableCell>
                <TableCell>RoleType</TableCell>
                <TableCell>Start date</TableCell>
                <TableCell>Stop date</TableCell>
                <TableCell>Code</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Take</TableCell>
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
                <TableCell>ID</TableCell>
                <TableCell>Assoc Id</TableCell>
                <TableCell>Ex </TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Red Name</TableCell>
                <TableCell>Action</TableCell>
                <TableCell>Date action</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>ActiveStatus</TableCell>
                <TableCell>Deceased</TableCell>
                <TableCell>Address_line</TableCell>
                <TableCell>Address_City</TableCell>
                <TableCell>Address_Country</TableCell>
                <TableCell>NameType</TableCell>
                <TableCell>Tickhoc</TableCell>
                <TableCell>BirthPlace</TableCell>
                <TableCell>FirstName</TableCell>
                <TableCell>middleName</TableCell>
                <TableCell>Surnname</TableCell>
                <TableCell>medianName</TableCell>
                <TableCell>Surffix</TableCell>
                <TableCell>SinglarName</TableCell>
                <TableCell>option</TableCell>
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
    <div className="h-screen">
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
