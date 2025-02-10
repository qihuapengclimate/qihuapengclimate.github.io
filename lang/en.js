// ---------- Navbar titles
const enNavbarData = {
  title: " Qihua Peng ",
  Home: "Home",
  publications: "Publications",
  Research: "Research",
  Jobs: "CV",
  Contact: "Contact",
};

// ---------- Home page data
const enHomePageData = {
  name: " Qihua Peng ",
  jobTitle: "Scripps Institution of Oceanography",
  home_title: "Bio",
  home_content: `
  <div>
    <p>I am a postdoctoral researcher at Scripps Institution of Oceanography, UC San Diego. My academic journey began with a B.Sc. in Ocean Sciences from School of Geography and Ocean Science, Nanjing University (July 2013), leading to a Ph.D. in Physical Oceanography from the South China Sea Institute of Oceanology, Chinese Academy of Sciences (July 2019). Between 2016 and 2018, I conducted research as a joint Ph.D. student at Scripps Institution of Oceanography.</li> 
    <p>  </p>
    I am interested in the climate dynamics, emphasizing tropical air-sea interactions, ocean current variability and their changes under global warming.  I typically employ a combination of observational data analysis, realistic numerical experiments, and diagnostic approaches to investigate these topics.
    <h2 class='title'>  </h2>
    <p>  </p>
    <ul>
      <li> Air-sea interaction</li>
      <li> Ocean dynamics </li>
      <li> El Niño-Southern Oscillation (ENSO) </li>
      <li> Climate change </li>      
    </ul>
  </div>
  `,
};

// ---------- Publications page data
const enPublicationsPageData = {
  type_one_title: "Peer-reviewed",

  type_one_items: [
    {
      title: `Peng, Q., Xie, S.-P., & Deser, C., (2024). Collapsed upwelling weakens ENSO under sustained warming beyond the 21st century. Nature Climate Change, 14(8), 815-822.`,
      abstract: ``,
      date: "",
      link: "https://www.nature.com/articles/s41558-024-02061-8",
      github: "",
      writers: [],
    },
    {
      title: `Peng, Q., Xie, S.-P., Passalacqua, G., Miyamoto A., & Deser, C., (2024). The 2023 extreme coastal El Niño: Atmospheric and air-sea coupling mechanisms. Science Advances, 10(12).`,
      abstract: ``,
      date: "",
      link: "https://www.science.org/doi/full/10.1126/sciadv.adk8646",
      github: "",
      writers: [],
    },
    {
      title: `Peng, Q., Xie, S.-P., Huang R., Wang, W., Zu, T., & Wang, D. (2023). Indonesian Throughflow slowdown under global warming: Remote AMOC effect vs. regional surface forcing. Journal of Climate, 36(5),1301-1318.`,
      abstract: ``,
      date: "",
      link: "https://journals.ametsoc.org/view/journals/clim/36/5/JCLI-D-22-0331.1.xml",
      github: "",
      writers: [],
    },
    {
      title: `Peng, Q., Xie, S.-P., Wang, D., Huang R., Chen G., Shu Y., et al. (2022). Surface warming–induced global acceleration of upper ocean currents. Science Advances, 8(16). `,
      abstract: ``,
      date: "",
      link: "https://www.science.org/doi/full/10.1126/sciadv.abj8394",
      github: "",
      writers: [],
    },
    {
      title: `Peng, Q., Xie, S.-P., Wang, D., Kamae, Y., Zhang, H., Hu, S., et al. (2020). Eastern Pacific wind effect on the evolution of El Niño: Implications for ENSO diversity. Journal of Climate, 33(8), 3197-3212.`,
      abstract: ``,
      date: "",
      link: "https://journals.ametsoc.org/view/journals/clim/33/8/jcli-d-19-0435.1.xml",
      github: "",
      writers: [],
    },
    {
      title: `Peng, Q., Xie, S.-P., Wang, D., Zheng, X.-T., & Zhang, H. (2019). Coupled ocean-atmosphere dynamics of the 2017 extreme coastal El Niño. Nature Communications, 10(1), 298.`,
      abstract: ``,
      date: "",
      link: "https://www.nature.com/articles/s41467-018-08258-8",
      github: "",
      writers: [],
    },
    {
      title: `Xie, S.-P., Peng, Q.#(co-first author), Kamae, Y., Zheng, X.-T., Tokinaga, H., & Wang, D. (2018). Eastern Pacific ITCZ dipole and ENSO diversity. Journal of Climate, 31(11), 4449-4462.`,
      abstract: ``,
      date: "",
      link: "https://journals.ametsoc.org/view/journals/clim/31/11/jcli-d-17-0905.1.xml?tab_body=fulltext-display",
      github: "",
      writers: [],
    },
    {
      title: `Peng, Q., Huang, R.-X., Wang, W., & Wang, D. (2020). The main heaving modes in the Pacific Ocean. Journal of Tropical Oceanography, 39(2), 1-10.`,
      abstract: ``,
      date: "",
      link: "https://www.jto.ac.cn/EN/Y2020/V39/I2/1",
      github: "",
      writers: [],
    },
    {
      title: `Luo, X., Yang, L., Chan, J.C., Chen, S., Peng, Q., & Wang, D., (2024). China coasts facing more tropical cyclone risks during the second decaying summer of double-year La Niña events. npj Climate and Atmospheric Science, 7(1), 198.`,
      abstract: ``,
      date: "",
      link: "https://www.nature.com/articles/s41612-024-00729-8",
      github: "",
      writers: [],
    },
    {
      title: `Zhou, X., Zhou, W., Wang, D., Xie, Q., Yang, L. and Peng, Q., (2024). Westerlies Affecting the Seasonal Variation of Water Vapor Transport over the Tibetan Plateau Induced by Tropical Cyclones in the Bay of Bengal. Advances in Atmospheric Sciences, 41(5), 881-893.`,
      abstract: ``,
      date: "",
      link: "https://link.springer.com/article/10.1007/s00376-023-3093-7",
      github: "",
      writers: [],
    },
    {
      title: `Wang, S., Jing, Z., Wu, L., Sun, S., Peng, Q., Wang, H., et al. (2023). Southern hemisphere eastern boundary upwelling systems emerging as future marine heatwave hotspots under greenhouse warming. Nature Communications, 14(1), 28.`,
      abstract: ``,
      date: "",
      link: "https://www.nature.com/articles/s41467-022-35666-8",
      github: "",
      writers: [],
    },
    {
      title: `Li, Y., Xie, S.P., Lian, T., Zhang, G., Feng, J., Ma, J., Peng, Q., Wang, W., Hou, Y. and Li, X., (2023). Interannual variability of regional Hadley circulation and El Niño interaction. Geophysical Research Letters, 50(4), e2022GL102016.`,
      abstract: ``,
      date: "",
      link: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2022GL102016",
      github: "",
      writers: [],
    },
    {
      title: `Chu, X., & Peng, Q. (2023). The role of alongshore wind and ocean wave in generating the northward Somali Current. Journal of Tropical Oceanography, 42(2), 1-8.`,
      abstract: ``,
      date: "",
      link: "https://www.jto.ac.cn/EN/PDF/10.11978/2022055",
      github: "",
      writers: [],
    }, 
    {
      title: `Chen, G., Huang, R. X., Peng, Q., & Chu, X. (2022). A time-dependent Sverdrup relation and its application to the Indian Ocean. Journal of Physical Oceanography, 52(6), 1233-1244.`,
      abstract: ``,
      date: "",
      link: "https://journals.ametsoc.org/view/journals/phoc/52/6/JPO-D-21-0223.1.xml",
      github: "",
      writers: [],
    },
    {
      title: `Liang, Z., Zeng, L., Wang, Q., Peng, Q., & Wang, D. (2022). Interpretation of interannual variability of the zonal contrasting thermal conditions in the winter South China Sea. Climate Dynamics, 1-19.`,
      abstract: ``,
      date: "",
      link: "https://link.springer.com/article/10.1007/s00382-021-05968-6",
      github: "",
      writers: [],
    },
    {
      title: `Zhang, Y., Yu, S.-Y., Xie, S.-P., Amaya, D. J., Peng, Q., Kosaka, Y., et al. (2022). Role of ocean dynamics in equatorial Pacific decadal variability. Climate Dynamics, 59(7-8), 2517-2529. `,
      abstract: ``,
      date: "",
      link: "https://link.springer.com/article/10.1007/s00382-022-06312-2",
      github: "",
      writers: [],
    }, 
    {
      title: `Zhong, Q., Chen, G., Li, Y., Peng, Q., & Chu, X. (2022). Intraseasonal variability of the surface zonal current in the equatorial Indian Ocean: Seasonal differences and causes. Acta Oceanologica Sinica, 41(5), 12-26.`,
      abstract: ``,
      date: "",
      link: "https://link.springer.com/article/10.1007/s13131-021-1935-7",
      github: "",
      writers: [],
    },  
    {
      title: `Shi, J.-R., Talley, L. D., Xie, S.-P., Peng, Q., & Liu, W. (2021). Ocean warming and accelerating Southern Ocean zonal flow. Nature Climate Change. `,
      abstract: ``,
      date: "",
      link: "https://www.nature.com/articles/s41558-021-01212-5",
      github: "",
      writers: [],
    },  
    {
      title: `Zeng, L., Chen, G., Huang, K., Chen, J., He, Y., Zhou, F., Yang, Y., Liang, Z., Peng, Q., Shi, R. and Gamage, T.P., (2021). A decade of eastern tropical Indian Ocean Observation Network (TIOON). Bulletin of the American Meteorological Society, 102(10), E2034-E2052.`,
      abstract: ``,
      date: "",
      link: "https://journals.ametsoc.org/view/journals/bams/102/10/BAMS-D-19-0234.1.xml",
      github: "",
      writers: [],
    },      
  ],
  type_two_title: "Under Review",
  type_two_items: [
    {
      title: `Peng, Q., Xie, S.-P., Miyamoto A., Deser, C., P. Zhang, & Luongo M., Unusual growth of the 2023-24 El Niño against the odds of Indo-Atlantic warming. Nature Geoscience (Accepted).`,
      abstract: ``,
      date: "",
      link: "",
      github: "",
      writers: [],
    },
    {
      title: `Luongo M., Xie, S.-P., Eisenman I., & Peng, Q.,. How the Subsurface Tropical Pacific Responds to Hemispherically Asymmetric Temperature Forcing: Implications for Cross-Equatorial Mass and Heat Transport. Journal of Climate (Minor revision).`,
      abstract: ``,
      date: "",
      link: "",
      github: "",
      writers: [],
    },
   {
      title: `Taylor, B. A., Shi, J.-R., Xie, S.-P., Talley, L. D., Luongo, M. T., & Peng, Q. (2024). Warming band in Southern Ocean’s Indian sector: The role of remote Atlantic buoyancy forcing via poleward-shifting circulation response. Journal of Climate (second review) `,
      abstract: ``,
      date: "",
      link: "",
      github: "",
      writers: [],
    },
  ],

};

// ---------- Research page data
const enResearchPageData = {
  title: "Research",
  content: `
    <div class='research_content'>
        <p> The El Niño–Southern Oscillation (ENSO) is the dominant mode of interannual climate variability with far-reaching global impacts. However, recent ENSO events have displayed unprecedented characteristics that challenge traditional ENSO dynamics. For instance, the extreme coastal El Niño events of 2017 and 2023 exhibited intense warming confined to coastal Peru and Ecuador, leading to severe flooding, hundreds of deaths, and extensive property damage. These events were driven by the combined effects of coastal alongshore winds and equatorial Kelvin waves, amplified by positive coastal Bjerknes feedback [1][2]. We further showed that the strong alongshore wind anomalies were associated with the Eastern Pacific ITCZ Dipole (EPID) mode [3][4] and interactions between the Madden-Julian Oscillation (MJO) phase 8 and the steep Andes [2]. These coupled processes provide significant predictability for such coastal El Niño events, offering approximately one month of lead time to prepare and mitigate impacts. </p>
        <p> The 2023-24 strong El Niño event is another example. Unlike traditional events, it featured strong eastern Pacific Sea Surface Temperature (SST) warming accompanied by unexpectedly weak atmospheric responses, including muted zonal wind anomalies and a low Southern Oscillation Index. This divergence from the classic ENSO paradigm underscores the diminished role of the positive Bjerknes feedback in this event. Through atmospheric general circulation model experiments, we showed that extraordinary warming in the Atlantic and Indian Oceans during 2023 and long-term global SST trends suppressed Pacific surface wind responses by modulating the Walker circulation. Our novel hindcast system revealed that pre-existing western Pacific heat content, accumulated during the preceding prolonged La Niña, contributed to the warming through wave dynamics and thermocline feedback, independent of wind stress feedback after April 2023 [5]. This challenges traditional ENSO paradigms, highlighting that strong El Niño events can arise from oceanic processes alone. </p>
        <img src='../files/images/enso.png' />
        <br />
        <p>In addition to present-day ENSO dynamics, I have also investigated the responses of climate system to global warming. While ENSO variability displays diverse short-term changes, our results show a robust reduction in ENSO amplitude after 2100 due to weakened thermocline feedback, thermodynamic damping, and increased thermal expansion coefficients under sustained warming [6]. Furthermore, we have investigated how global warming influences ocean circulation. Our studies reveal that global upper-ocean circulation responses to anthropogenic forcing are primarily driven by surface warming. This mechanism accelerates upper subtropical gyres and equatorial currents by enhancing stratification and shoaling these current systems [7]. Additionally, we find that weakening of the Atlantic Meridional Overturning Circulation (AMOC) under global warming transmits coastal Kelvin waves to weaken the Indonesian Throughflow [8].</p>
        <img src='../files/images/current.jpg' />
        <p>1. Peng, Q., Xie, S.-P., Wang, D., Zheng, X.-T., & Zhang, H. (2019). Coupled ocean-atmosphere dynamics of the 2017 extreme coastal El Niño. Nature Communications, 10(1), 298. </p>
        <p>2. Peng, Q., Xie, S.-P., Passalacqua, G., Miyamoto A., & Deser, C., (2024). The 2023 extreme coastal El Niño: Atmospheric and air-sea coupling mechanisms. Science Advances, 10(12).</p>
        <p>3. Xie, S.-P., Peng, Q.#(co-first author), Kamae, Y., Zheng, X.-T., Tokinaga, H., & Wang, D. (2018). Eastern Pacific ITCZ dipole and ENSO diversity. Journal of Climate, 31(11), 4449-4462. </p>
        <p>4. Peng, Q., Xie, S.-P., Wang, D., Kamae, Y., Zhang, H., Hu, S., et al. (2020). Eastern Pacific wind effect on the evolution of El Niño: Implications for ENSO diversity. Journal of Climate, 33(8), 3197-3212.</p>
        <p>5. Peng, Q., Xie, S.-P., Miyamoto A., Deser, C., P. Zhang, & Luongo M. Unusual growth of the 2023-24 El Niño against the odds of Indo-Atlantic warming. Nature Geoscience (accepted).</p>
        <p>6. Peng, Q., Xie, S.-P., & Deser, C., (2024). Collapsed upwelling weakens ENSO under sustained warming beyond the 21st century. Nature Climate Change, 14(8), 815-822.</p>
        <p>7. Peng, Q., Xie, S.-P., Wang, D., Huang R., Chen G., Shu Y., et al. (2022). Surface warming–induced global acceleration of upper ocean currents. Science Advances, 8(16). </p>
        <p>8. Peng, Q., Xie, S.-P., Huang R., Wang, W., Zu, T., & Wang, D. (2023). Indonesian Throughflow slowdown under global warming: Remote AMOC effect vs. regional surface forcing. Journal of Climate, 36(5),1301-1318. </p>
        <p> </p>
    </div>
  `,
};
// ---------- Jobs page data
const enJobsPageData = {
  title: "Education",
  items: [
    {
      title: `Ph.D.`,
      company: "South China Sea Institute of Oceanology (SCSIO), Chinese Academy of Sciences (CAS)",
      startData: "September 2013",
      endDate: "June 2019",
      location: "Gunangzhou",
      abstract:
        "Major: Physical Oceanography",
      achievements: [""],
    },
    {
      title: `Joint Ph.D. student`,
      company: "Scripps Institution of Oceanography, UC San Diego",
      startData: "September 2016",
      endDate: "September 2018",
      location: "San Diego",
      abstract:
        "Major: Physical Oceanography",
      achievements: [""],
    },
  ],
};
