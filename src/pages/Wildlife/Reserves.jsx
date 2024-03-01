import React from "react"
import { Container, Table } from "react-bootstrap"

const Reserves = () => {
  return (
    <Container>
      <h2>Community Reserves</h2>
      <p>
        The Govt. of Meghalaya has vide Section 36 C of the Wild Life
        (Protection) Act,1972 declared 64 private and community lands/forests
        into Community Reserves which do not comprise within a National Park or
        Wildlife Sanctuary, to increase the area under protected networks for
        protecting flora, fauna and traditional or cultural conservation values
        and practices. These will also provide a refuge and safe path for
        animals in every day search of food. The details of the notified
        Community Forests are given below.
      </p>
      <Table bordered>
        <thead className="table-dark">
          <tr>
            <th>Sl.No</th>
            <th>Name of Community Reserve</th>
            <th>Area(Ha)</th>
            <th>District</th>
            <th>Govt. Notification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Khloo Blai Sein Raij Tuber Community Reserve</td>
            <td>89.43</td>
            <td rowSpan={7}>East Jaintia Hills</td>
            <td>No.FOR.17/2013/134, Dt.10.7.2013</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Ka Khloo ThangbruUmsymphu Community Reserve</td>
            <td>19.6</td>
            <td>No.FOR.17/2013/Pt/44, Dt.4.3.2014</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Ka Khloo Pohblai Mooshutia Community Reserve</td>
            <td>33.5</td>
            <td>No.FOR.17/2013/Pt/45, Dt.4.3.2014</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Smaw Der Khli Community Reserve</td>
            <td>0.209</td>
            <td>No.FOR.17/2013/Pt/214, Dt.29-01-2020</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Ka KhlawUmthalong Community Reserve</td>
            <td>2.401</td>
            <td>No.FOR.17/2013/Pt/212, Dt.29-01-2020</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Ka KremLabitUmkyrpong Community Reserve</td>
            <td>4.80</td>
            <td>No.FOR.17/2013/424, Dt.09-03-2020</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Ka Khloo MoopyaiWapung Shnong Community Reserve</td>
            <td>68.462</td>
            <td>No.FOR.17/2013/Pt/440, Dt.12-02-2021</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Ka KhlooKhyllemShrieh Khloo Thangbru Community Reserve</td>
            <td>4.10</td>
            <td></td>
            <td>NO.FOR.17/2013/488, Dt.19-01-2021</td>
          </tr>
          <tr>
            <td>9</td>
            <td>
              Khloo Blai Chyrmang Sein Raij Kongwasan Chyrmang Kmai Community
              Reserve
            </td>
            <td>7.00</td>
            <td rowSpan={9}>West Jaintia Hills</td>
            <td>No.FOR.17/2013/135, Dt.10.7.2013</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Ka Khloo Langdoh Kur Pyrtuh Community Reserve</td>
            <td>15.4</td>
            <td>No.FOR.17/2013/Pt/46, Dt.4.3.2014</td>
          </tr>
          <tr>
            <td>11</td>
            <td>Khloo Amrawan Community Reserve</td>
            <td>128.75</td>
            <td>No.FOR.17/2013/Pt/132, Dt.20.11.2015</td>
          </tr>
          <tr>
            <td>12</td>
            <td>Khloo Blai Ka Raij U LangdohIonglang Community Reserve</td>
            <td>15.12</td>
            <td>No.FOR.17/2013/Pt/144, Dt.07.03.2016</td>
          </tr>
          <tr>
            <td>13</td>
            <td>Ka Lum LuweCommunity Reserve</td>
            <td>14.1</td>
            <td>No.FOR.17/2013/351, 07-08-2018</td>
          </tr>
          <tr>
            <td>14</td>
            <td>Ka Wah Umpatho Community Reserve</td>
            <td>31.864</td>
            <td>No.FOR.17/2013/Pt/208, Dt.18-11-2019</td>
          </tr>
          <tr>
            <td>15</td>
            <td>
              Ka Khloo Thangbru Sula Lynter Sein Raij Mynso Community Reserve{" "}
            </td>
            <td>3.293</td>
            <td>No.FOR.17/2013/Pt/206, Dt.18-11-2019</td>
          </tr>
          <tr>
            <td>16</td>
            <td>Ka Khloo Blai Lyngdoh Sein Raij Mynso Community Reserve</td>
            <td>0.852</td>
            <td>No.FOR.17/2013/Pt/204, Dt.18-11-2019</td>
          </tr>
          <tr>
            <td>17</td>
            <td>
              Ka Khloo BlaiLangdoh Ka Kur LyngdohRaijRaliang Community Reserve{" "}
            </td>
            <td>3.51</td>
            <td>NO.FOR.17/2013/490, Dt.19-01-2021</td>
          </tr>
          <tr>
            <td>18</td>
            <td>Mandalgre Community Reserve</td>
            <td>50</td>
            <td rowSpan={4}>East Garo Hills</td>
            <td>No.FOR.17/2013/136, Dt.10.7.2013</td>
          </tr>
          <tr>
            <td>19</td>
            <td>Daribokgre Community Reserve</td>
            <td>173</td>
            <td>No.FOR.17/2013/136, Dt.10.7.2013</td>
          </tr>
          <tr>
            <td>20</td>
            <td>Dura Kalakgre Community Reserve</td>
            <td>60</td>
            <td>No.FOR.17/2013/136, Dt.10.7.2013</td>
          </tr>
          <tr>
            <td>21</td>
            <td>Aruakgre Community Reserve</td>
            <td>10</td>
            <td>No.FOR.17/2013/136, Dt.10.7.2013</td>
          </tr>
          <tr>
            <td>22</td>
            <td>Dumitdikgre Community Reserve</td>
            <td>70</td>
            <td rowSpan={10}>West Garo Hills </td>
            <td>No.FOR.17/2013/137, Dt.10.7.2013</td>
          </tr>
          <tr>
            <td>23</td>
            <td>Sakalgre Community Reserve</td>
            <td>122</td>
            <td>No.FOR.17/2013/137, Dt.10.7.2013</td>
          </tr>
          <tr>
            <td>24</td>
            <td>Sasatgre Community Reserve</td>
            <td>60</td>
            <td>No.FOR.17/2013/137, Dt.10.7.2013</td>
          </tr>
          <tr>
            <td>25</td>
            <td>Selbalgre Community Reserve</td>
            <td>20</td>
            <td>No.FOR.17/2013/137, Dt. 10.7.2013</td>
          </tr>
          <tr>
            <td>26</td>
            <td>Chandigre Community Reserve</td>
            <td>37</td>
            <td>No.FOR.17/2013/137, Dt.10.7.2013</td>
          </tr>
          <tr>
            <td>27</td>
            <td>Baladingre Community Reserve</td>
            <td>50</td>
            <td>No.FOR.17/2013/Pt/12, Dt.15.7.2013</td>
          </tr>
          <tr>
            <td>28</td>
            <td>Mongalgre Community Reserve</td>
            <td>20</td>
            <td>No.FOR.17/2013/Pt/74, Dt.19-08-2014</td>
          </tr>
          <tr>
            <td>29</td>
            <td>Chimanpara Community Reserve</td>
            <td>10.2</td>
            <td>No.FOR.17/2013/Pt/177, Dt.26-10-2016</td>
          </tr>
          <tr>
            <td>30</td>
            <td>Thokpara Community Reserve</td>
            <td>30</td>
            <td>No.FOR.17/2013/Pt/178, Dt.26-10-2016</td>
          </tr>
          <tr>
            <td>31</td>
            <td>Rongalgre Community Reserve</td>
            <td>16.5</td>
            <td>No.FOR.17/2013/Pt/179, Dt.26-10-2016</td>
          </tr>
          <tr>
            <td>32</td>
            <td>Aruakgre Community Reserve</td>
            <td>100</td>
            <td rowSpan={3}>North Garo Hills</td>
            <td>No.FOR.17/2013/Pt/76, Dt.19-08-2014</td>
          </tr>
          <tr>
            <td>33</td>
            <td>ResuHaluapara Community Reserve</td>
            <td>50</td>
            <td>No.FOR.17/2013/Pt/77, Dt.19-08-2014</td>
          </tr>
          <tr>
            <td>34</td>
            <td>Kitmadamgre Community Reserve</td>
            <td>70</td>
            <td>No.FOR.17/2013/Pt/78, Dt.19-08-2014</td>
          </tr>
          <tr>
            <td>35</td>
            <td>RongmaParomgre Community Reserve</td>
            <td>62.30</td>
            <td rowSpan={25}>South Garo hills</td>
            <td>No.FOR.17/2013/138, Dt.10.7.2013</td>
          </tr>
          <tr>
            <td>36</td>
            <td>RongmaRekmangre Community Reserve</td>
            <td>192.40</td>
            <td>No.FOR.17/2013/138, Dt.10.7.2013</td>
          </tr>
          <tr>
            <td>37</td>
            <td>Eman Asakgre Community Reserve</td>
            <td>30.40</td>
            <td>No.FOR.17/2013/138, Dt.10.7.2013</td>
          </tr>
          <tr>
            <td>38</td>
            <td>Bandarigre Community Reserve</td>
            <td>0.67</td>
            <td>No.FOR.17/2013/138, Dt.10.7.2013</td>
          </tr>
          <tr>
            <td>39</td>
            <td>Mikadogre Community Reserve</td>
            <td>1.28</td>
            <td>No.FOR.17/2013/138, Dt. 10.7.2013</td>
          </tr>
          <tr>
            <td>40</td>
            <td>Dangkipara Community Reserve</td>
            <td>2.50</td>
            <td>No.FOR.17/2013/Pt/75, Dt.19.8.2014</td>
          </tr>
          <tr>
            <td>41</td>
            <td>BalsriAding Community Reserve</td>
            <td>45.60</td>
            <td>No.FOR.17/2013/Pt/297, Dt.07.06.2017</td>
          </tr>
          <tr>
            <td>42</td>
            <td>Chenggni Community Reserve</td>
            <td>174.00</td>
            <td>No.FOR.17/2013/Pt/298, Dt.07.06.2017</td>
          </tr>
          <tr>
            <td>43</td>
            <td>Chimitap Community Reserve</td>
            <td>228.00</td>
            <td>No.FOR.17/2013/Pt/299, Dt.07.06.2017</td>
          </tr>
          <tr>
            <td>44</td>
            <td>Dallenggittim Community Reserve</td>
            <td>22.17</td>
            <td>No.FOR.17/2013/Pt/300, Dt.07.06.2017</td>
          </tr>
          <tr>
            <td>45</td>
            <td>DambukAttong Community Reserve</td>
            <td>366.00</td>
            <td>No.FOR.17/2013/Pt/301, Dt.07.06.2017</td>
          </tr>
          <tr>
            <td>46</td>
            <td>DambukJongkol Community Reserve</td>
            <td>264.80</td>
            <td>No.FOR.17/2013/Pt/302, Dt.07.06.2017</td>
          </tr>
          <tr>
            <td>47</td>
            <td>Gokagre Community Reserve</td>
            <td>17.89</td>
            <td>No.FOR.17/2013/Pt/303, Dt.07.06.2017</td>
          </tr>
          <tr>
            <td>48</td>
            <td>HalwaAmbeng Community Reserve</td>
            <td>94.10</td>
            <td>No.FOR.17/2013/Pt/304, Dt.07.06.2017</td>
          </tr>
          <tr>
            <td>49</td>
            <td>Jaksongram Community Reserve</td>
            <td>55.50</td>
            <td>No.FOR.17/2013/Pt/305, Dt.07.06.2017</td>
          </tr>
          <tr>
            <td>50</td>
            <td>Lotnagar Community Reserve</td>
            <td>45.60</td>
            <td>No.FOR.17/2013/Pt/306, Dt.07.06.2017</td>
          </tr>
          <tr>
            <td>51</td>
            <td>Matchirampat Community Reserve</td>
            <td>21.70</td>
            <td>No.FOR.17/2013/Pt/307, Dt.07.06.2017</td>
          </tr>
          <tr>
            <td>52</td>
            <td>Nitwatgre Community Reserve</td>
            <td>49.50</td>
            <td>No.FOR.17/2013/Pt/308, Dt.07.06.2017</td>
          </tr>
          <tr>
            <td>53</td>
            <td>RewakDaburam Community Reserve</td>
            <td>18.30</td>
            <td>No.FOR.17/2013/Pt/309, Dt.07.06.2017</td>
          </tr>
          <tr>
            <td>54</td>
            <td>RewakWatregittim Community Reserve</td>
            <td>9.80</td>
            <td>No.FOR.17/2013/Pt/310, Dt.07.06.2017</td>
          </tr>
          <tr>
            <td>55</td>
            <td>Rongcheng Community Reserve</td>
            <td>235.60</td>
            <td>No.FOR.17/2013/Pt/311, Dt.07.06.2017</td>
          </tr>
          <tr>
            <td>56</td>
            <td>Taidang Community Reserve</td>
            <td>121.40</td>
            <td>No.FOR.17/2013/Pt/312, Dt.07.06.2017</td>
          </tr>
          <tr>
            <td>57</td>
            <td>Siju Duramong-I Community Reserve</td>
            <td>76.80</td>
            <td>No.FOR.17/2013/Pt/313, Dt.07.06.2017</td>
          </tr>
          <tr>
            <td>58</td>
            <td>Siju Duramong-II Community Reserve</td>
            <td>251.00</td>
            <td>No.FOR.17/2013/Pt/314, Dt.07.06.2017</td>
          </tr>
          <tr>
            <td>59</td>
            <td>Upper Dosogre Community Reserve</td>
            <td>19.691</td>
            <td>No.FOR.17/2013/Pt/315, Dt.07.06.2017</td>
          </tr>
          <tr>
            <td>60</td>
            <td>Nongsangu Community Reserve</td>
            <td>100</td>
            <td rowSpan={5}>Ri-bhoi</td>
            <td>No.FOR.17/2013/181, Dt.10.3.2014</td>
          </tr>
          <tr>
            <td>61</td>
            <td>Raid Nongbri Community Reserve</td>
            <td>70</td>
            <td>No.FOR.17/2013/182, Dt.10.3.2014</td>
          </tr>
          <tr>
            <td>62</td>
            <td>Lum Jusong Community Reserve</td>
            <td>130.46</td>
            <td>No.FOR.17/2013/210, Dt.05.9.2016</td>
          </tr>
          <tr>
            <td>63</td>
            <td>Jirang Community Reserve</td>
            <td>200</td>
            <td>No.FOR.17/2013/184, Dt.10.3.2014</td>
          </tr>
          <tr>
            <td>64</td>
            <td>Raid Nonglyngdoh /PdahKyndeng Community Reserve</td>
            <td>75</td>
            <td>No.FOR.17/2013/185, Dt.10.3.2014</td>
          </tr>
          <tr>
            <td>65</td>
            <td>Phudja-Ud Community Reserve</td>
            <td>120</td>
            <td rowSpan={3}>South West Khasi Hills</td>
            <td>No.FOR.17/2013/186, Dt.10.3.2014</td>
          </tr>
          <tr>
            <td>66</td>
            <td>Umsum Pitcher Plant Community Reserve</td>
            <td>40</td>
            <td>No.FOR.17/2013/Pt/119, Dt.04.12.2014</td>
          </tr>
          <tr>
            <td>67</td>
            <td>Lumkohkriah Community Reserve</td>
            <td>611</td>
            <td>No.FOR.17/2013/Pt/120, Dt. 04.12.2014</td>
          </tr>
          <tr>
            <td>68</td>
            <td>Lawbah Community Reserve</td>
            <td>311.44</td>
            <td rowSpan={5}>East Khasi Hills</td>
            <td>No.FOR.17/2013/209, Dt.05.9.2016</td>
          </tr>
          <tr>
            <td>69</td>
            <td>Ryngibah Community Reserve</td>
            <td>96.909</td>
            <td>No.FOR.17/2013/214, Dt.29.11.2016</td>
          </tr>
          <tr>
            <td>70</td>
            <td>Ryngud Community Reserve</td>
            <td>522</td>
            <td>No.FOR.17/2013/Pt/121, Dt. 04.12.2014</td>
          </tr>
          <tr>
            <td>71</td>
            <td>Thangkharang Community Reserve</td>
            <td>111</td>
            <td>No.FOR.17/2013/Pt/122, Dt.04.12.2014</td>
          </tr>
          <tr>
            <td>72</td>
            <td>Ka Law Lyngdoh Community Reserve</td>
            <td>3.481</td>
            <td>No.FOR.17/2013/438, Dt.02-07-2020</td>
          </tr>
          <tr>
            <td>73</td>
            <td>KpohEijah Community Reserve</td>
            <td>17</td>
            <td rowSpan={2}>West Khasi Hills</td>
            <td>No.FOR.17/2013/Pt/117, Dt. 04.12.2014</td>
          </tr>
          <tr>
            <td>74</td>
            <td>Miewsyiar Community Reserve</td>
            <td>87</td>
            <td>No.FOR.17/2013/Pt/118, Dt.04.12.2014</td>
          </tr>
          <tr className="fw-bold">
            <td colSpan={2}>Grand Total</td>
            <td>6293.382</td>
            <td colSpan={2}></td>
          </tr>
        </tbody>
      </Table>
      <p>
        An agreement is made between the Forest Department and The Village
        Durbar/Clan/Community/ represented by its President for establishment of
        a Community Reserve. The salient features of the agreement are :-
      </p>
      <ul>
        <li>
          The ownership of the land taken up for the establishment of the
          Community Reserve shall lie solely with the community/clan.
        </li>
        <li>
          The Forests & Environment Department, Government of Meghalaya shall
          have no claim whatsoever over the ownership of the land. Neither the
          name/title of this Sacred Grove/Community forest shall be changed nor
          the schedule of boundaries.
        </li>
        <li>
          However, after issuance of notification by the state Government
          declaring the community reserve no change in land use pattern shall be
          made within community reserve, except in accordance with the procedure
          contained in Section 36(C)(3) of Act.
        </li>
        <li>No hunting inside CRs.</li>
        <li>
          The Rites and Rituals of Village Durbar/Clan/Community/ etc. which
          have been practiced from time immemorial shall continue with no
          interference/hindrance from the First Party(i.e. the Forest &
          Environment Department, Government of Meghalaya).
        </li>
        <li>
          All Restrictions or regulations imposed by the /Village
          Durbar/Community etc prior to the establishment of the Community
          Reserve duly accepted by both parties shall stand in future.
        </li>
        <li>
          Management of the C.R will be done by the Community Reserved
          management committee notify by the Govt- sec 36 D.
        </li>
        <li>
          The committee shall be the competent authority to prepare and
          implement the management plan and take steps to ensure protection of
          wildlife and its habitat in the reserve.
        </li>
      </ul>
    </Container>
  )
}

export default Reserves
