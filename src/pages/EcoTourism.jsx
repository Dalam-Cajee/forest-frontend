import React from 'react'
import { Container, Table } from 'react-bootstrap'

const EcoTourism = () => {
  return (
    <Container>
      <h2 className='text-center'>Eco - Tourism</h2>
      <p>
        <strong>
          Eco-tourism is a responsible travel to natural destinations where
          flora, fauna and cultural heritage are primary attractions. It is a
          type of tourism where the environment, local community and visitor all
          benefit.
        </strong>
        The rolling mists in the valleys, the undulating hills, numerous lakes,
        waterfalls, caves, sacred forests, dense forests, breath-taking scenic
        beauty makes the State overwhelmingly beautiful and one of the most
        favoured tourist destinations in the country.
      </p>
      <h4>Eco-tourism spots in Meghalaya</h4>
      <Table striped bordered>
        <thead className='table-dark'>
          <tr>
            <th>Sl.No.</th>
            <th>Place</th>
            <th>District</th>
            <th>Distance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Rhododendron Trek, Shillong</td>
            <td rowSpan={15} className='align-middle'>
              East Khasi Hills
            </td>
            <td>5 km from Shillong </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Elephanta Falls, Shillong</td>
            <td>12 km from Shillong </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Shillong View point, Shillong </td>
            <td>15 km from Shillong </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Riat Khwan RF, Mawiong, Shillong</td>
            <td>5 km from Shillong </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Umiam Lake</td>
            <td>15 km from shilling </td>
          </tr>
          <tr>
            <td>6</td>
            <td>Lum Nehru Park </td>
            <td>15 km from shillong </td>
          </tr>
          <tr>
            <td>7</td>
            <td>Thangkharang Park</td>
            <td>90 km from Shillong </td>
          </tr>
          <tr>
            <td>8</td>
            <td>Double decker Living root bridge, Nongriat </td>
            <td>65 kms from Shillong </td>
          </tr>
          <tr>
            <td>9</td>
            <td>Single decker Living root bridge, Mawlynnong </td>
            <td>78 km Shillong</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Mawsmai caves</td>
            <td>62 km from Shillong </td>
          </tr>
          <tr>
            <td>11</td>
            <td>Sohra (Cherrapunjee)/Noh Ka Likai Falls/Seven Sister falls </td>
            <td>56 km from Shillong </td>
          </tr>
          <tr>
            <td>12</td>
            <td>Lawba pitcher plant area </td>
            <td>70 km from Shillong</td>
          </tr>
          <tr>
            <td>13</td>
            <td>Umngot River, Dwaki </td>
            <td>82km from Shillong </td>
          </tr>
          <tr>
            <td>14</td>
            <td>Mawlynnong -Asia's cleanest village </td>
            <td>78 km Shillong </td>
          </tr>
          <tr>
            <td>15</td>
            <td>Mawmluh cave </td>
            <td>1 km from sohra </td>
          </tr>
          <tr>
            <td>16</td>
            <td>Nongkhnum Island </td>
            <td>West Khasi Hills </td>
            <td>15 km from Nongstoin </td>
          </tr>
          <tr>
            <td>17</td>
            <td>Ranikor River Beach </td>
            <td>South West Khasi Hills </td>
            <td>122 km from Shillong 216 km from guwahati </td>
          </tr>
          <tr>
            <td>18</td>
            <td>Nongmahir Islands</td>
            <td rowSpan={6} className='align-middle'>
              Ri-bhoi
            </td>
            <td>44 km from Shillong </td>
          </tr>
          <tr>
            <td>19</td>
            <td>Birbah Lake</td>
            <td>Inside Nongkhyllem Wildlife Sanctuary </td>
          </tr>
          <tr>
            <td>20</td>
            <td>Lailad Salt lick</td>
            <td>Inside Nongkhyllem Wildlife Sanctuary </td>
          </tr>
          <tr>
            <td>21</td>
            <td>Nongkhyllem Wildlife Sanctuary, Lailad </td>
            <td>79 km from Shillong 73 km from Guwahati</td>
          </tr>
          <tr>
            <td>22</td>
            <td>Nongkhyllem Wildlife Sanctuary, Umtasor</td>
            <td>44 km from Shillong </td>
          </tr>
          <tr>
            <td>23</td>
            <td>Barapani </td>
            <td>15 km from Shillong </td>
          </tr>
          <tr>
            <td>24</td>
            <td>Thadlaskien lake</td>
            <td rowSpan={3} className='align-middle'>
              West Jaintia Hills{' '}
            </td>
            <td>55 km from Shillong </td>
          </tr>
          <tr>
            <td>25</td>
            <td>Ialong Park</td>
            <td>8 km from Jowai </td>
          </tr>
          <tr>
            <td>26</td>
            <td>Jarain pitcher plant area </td>
            <td></td>
          </tr>
          <tr>
            <td>27</td>
            <td>Nokrek National Park</td>
            <td>East Garo hills </td>
            <td>45 km from Tura </td>
          </tr>
          <tr>
            <td>28</td>
            <td>Tura Peak </td>
            <td rowSpan={2} className='align-middle'>
              West Garo hills
            </td>
            <td>5 km from Tura</td>
          </tr>
          <tr>
            <td>29</td>
            <td>Pelga falls</td>
            <td>7 kms from Tura</td>
          </tr>
          <tr>
            <td>30</td>
            <td>Balpakram National Park (Hatisia gate)</td>
            <td></td>
            <td>166 km from Tura 62 km from Baghmara</td>
          </tr>
          <tr>
            <td>31</td>
            <td>Baghmara Reserved Forests </td>
            <td></td>
            <td>
              327 km from Guwahati <br />4 km from Baghmara town
            </td>
          </tr>
          <tr>
            <td>32</td>
            <td>Baghmara Pitcher Plant Sanctuary</td>
            <td></td>
            <td>105 kmfrom Tura 0 km Baghmara </td>
          </tr>
          <tr>
            <td>33</td>
            <td>
              Siju bird sanctuary/ Siju Hanging Bridge/ Siju Cave/Geographical
              lake
            </td>
            <td></td>
            <td rowSpan={2}>
              216 km from Guwahati
              <br />
              118 km from Tura
              <br />
              37 km from Baghmara
              <br />
              248 km from Shillong
            </td>
          </tr>
          <tr>
            <td>34</td>
            <td>Siju Plateau</td>
            <td></td>
          </tr>
          <tr>
            <td>35</td>
            <td>Rewak Hanging Bridge </td>
            <td></td>
            <td>
              132 Km from Tura <br />
              24 km from Baghamara
            </td>
          </tr>
          <tr>
            <td>36</td>
            <td>Rewak Reserve Forest</td>
            <td></td>
            <td>30 km from Baghmara</td>
          </tr>
          <tr>
            <td>37</td>
            <td>Simsang beach</td>
            <td></td>
            <td>105 km from Tura 0 km from baghmara </td>
          </tr>
          <tr>
            <td>38</td>
            <td>Nengkong </td>
            <td></td>
            <td>14 km from Baghmara</td>
          </tr>
          <tr>
            <td>39</td>
            <td>Rongdong Falls</td>
            <td></td>
            <td>40 km from Baghmara 116 km from Tura </td>
          </tr>
          <tr>
            <td>40</td>
            <td>Siju-Rewak Elephant Corridor/Areteka/Rewak Village </td>
            <td></td>
            <td>126 km from Tura 30 km from Baghmara</td>
          </tr>
          <tr>
            <td>41</td>
            <td>Rewak-Arteka Village</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>42</td>
            <td>Da'bat Wari</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>43</td>
            <td>RongsuA'gal</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>44</td>
            <td>Warisruk Wari (along river Simsang)</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>45</td>
            <td>Alokpang Village</td>
            <td></td>
            <td>122 km from Tura 30 km from Baghmara</td>
          </tr>
          <tr>
            <td>46</td>
            <td>Dombe Wari (Dombeware) natural lake </td>
            <td></td>
            <td>148 km from Tura 37 km from Baghmara</td>
          </tr>
          <tr>
            <td>47</td>
            <td>Chitmang(Kailash) Peak</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>48</td>
            <td>Hanging Rock</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>49</td>
            <td>Do.bu lake at Damalgre </td>
            <td>South West Garo hills </td>
            <td>35 km from Ampati</td>
          </tr>
        </tbody>
      </Table>
      <p className='fw-bold'>
        * Important Note: Entry to National Parks, Sanctuary and Reserved
        Forests restricted and allowed only after permission from concerned
        Forest officer.
      </p>
    </Container>
  )
}

export default EcoTourism
