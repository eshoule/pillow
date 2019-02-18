LISTINGS = ['agent','owner','construction','foreclosure',
  'coming soon','forclosed','pre-foreclosure','make me move',
  'for rent', 'recently sold']

HOMES = ['house','apartment','condo','townhome','manufactured','lot']

ADDRESSES = [
  {street: '8200 High Ridge Dr.', city: 'Riverside', zip: '92503', lat: 33.765538, lng: -117.833870},
  {street: '8481 Ramblewood Ave.', city: 'Pomona', zip: '91766', lat: 45.835490, lng: -66.473360},
  {street: '17 Peg Shop Ave.', city: 'Santa Ana', zip: '92703', lat: 37.671710, lng: -122.481470},
  {street: '333 Depot Ave.', city: 'Fontana', zip: '92335', lat: 34.095730, lng: -117.489820},
  {street: '89 E. Lancaster Ave.', city: 'Lancaster', zip: '93535', lat: 33.867850, lng: -117.861180},
  {street: '68 Miles Dr.', city: 'Oxnard', zip: '93030', lat: 43.860510, lng: -79.008940},
  {street: '52 Pawnee Ave.', city: 'Fremont', zip: '94536', lat: 43.798090, lng: -79.333790},
  {street: '8014 Ramblewood Dr.', city: 'Fontana', zip: '92336', lat: 43.242320, lng: -83.792630},
  {street: '822 Branch St.', city: 'Oceanside', zip: '92056', lat: 33.252940, lng: -117.202150},
  {street: '8196 Bow Ridge St.', city: 'San Jose', zip: '95116', lat: 37.406660, lng: -121.867110},
  {street: '7247 Hudson Lane', city: 'San Diego', zip: '92126', lat: 32.822230, lng: -116.829680},
  {street: '24 Willow Street', city: 'Union City', zip: '94587', lat: 43.461240, lng: -80.513770},
  {street: '311 Green Ave.', city: 'Fresno', zip: '93722', lat: 36.683540, lng: -120.137820},
  {street: '7484 Andover Drive', city: 'San Marcos', zip: '92069', lat: 38.000350, lng: -121.857590},
  {street: '138 Hilldale Ave.', city: 'Santa Ana', zip: '92703', lat: 18.075220, lng: -66.367600},
  {street: '32 Ocean St.', city: 'Huntington Park', zip: '90255', lat: 33.687710, lng: -117.995350},
  {street: '7147 Wakehurst St.', city: 'Cerritos', zip: '90703', lat: 34.127390, lng: -117.434560},
  {street: '526 West West Drive', city: 'Anaheim', zip: '92805', lat: 33.836600, lng: -117.855520},
  {street: '366 Eureka St.', city: 'San Francisco', zip: '94114', lat: 37.759090, lng: -122.438130},
  {street: '1 Saxton Ave.', city: 'Lake Forest', zip: '92630', lat: 33.6475421, lng: -117.6792517},
  {street: '1 Spruce Street', city: 'Reseda', zip: '91335', lat: 34.2035088, lng: -118.5389414},
  {street: '101 Bank Street', city: 'Garden Grove', zip: '92840', lat: 33.7823437, lng: -117.8991103},
  {street: '123 Joy Ridge St.', city: 'Westminster', zip: '92683', lat: 33.75085, lng: -117.9727858},
  {street: '139 East Ivy Rd.', city: 'San Francisco', zip: '94109', lat: 37.7775648, lng: -122.4214553},
  {street: '144 Glenholme Street', city: 'Watsonville', zip: '95076', lat: 36.910231, lng:-121.7568946},
  {street: '162 Heather Rd.', city: 'Huntington Beach', zip: '92646', lat: 34.1033486, lng:-118.4056779},
  {street: '164 East Grandrose Court', city: 'San Diego', zip: '92115', lat: 58.2540042, lng:-122.4876797},
  {street: '166 SW. Mayfair Ave.', city: 'Carson', zip: '90745', lat: 33.8232001, lng:-118.2585096},
  {street: '17 Manchester Lane', city: 'Palmdale', zip: '93550', lat: 34.3579404, lng:-118.0654445},
  {street: '175 Trout Dr.', city: 'Cerritos', zip: '90703', lat: 33.8724552, lng:-118.0595907},
  {street: '2 Bridgeton St.', city: 'Lynwood', zip: '90262', lat: 33.9198647, lng:-118.2000277},
  {street: '2 Lookout Ave.', city: 'Lancaster', zip: '93535', lat: 34.6851247, lng:-118.0929194},
  {street: '21 Foxrun Lane', city: 'El Monte', zip: '91732', lat: 34.0791053, lng:-118.0127534},
  {street: '21 Hall Street', city: 'Santa Ana', zip: '92707', lat: 33.7137233, lng:-117.8961819},
  {street: '21 Van Dyke Ave.', city: 'Oakland', zip: '94601', lat: 37.8032496, lng:-122.2445655},
  {street: '212 Bradford Circle', city: 'Carmichael', zip: '95608', lat: 38.6272793, lng:-121.3198491},
  {street: '217 E. Hill Field Street', city: 'Tracy', zip: '95376', lat: 37.7452506, lng:-121.4211668},
  {street: '22 Anderson Lane', city: 'Santa Clara', zip: '95051', lat: 37.3363589, lng:-121.9985712},
  {street: '23 York St.', city: 'Fontana', zip: '92336', lat: 34.1263798, lng:-117.4803542},
  {street: '239 Euclid St.', city: 'Long Beach', zip: '90813', lat: 33.7655618, lng:-118.1494112},
  {street: '24 Essex St.', city: 'Los Angeles', zip: '90026', lat: 34.0269935, lng:-118.2497217},
  {street: '246 Sussex Ave.', city: 'Bakersfield', zip: '93307', lat: 35.2421103, lng:-118.9761519},
  {street: '25 Penn Drive', city: 'Anaheim', zip: '92804', lat: 33.82353, lng:-117.9659037},
  {street: '250 Rosewood Road', city: 'Long Beach', zip: '90805', lat: 33.8640647, lng:-118.1766294},
  {street: '26 John Drive', city: 'Vacaville', zip: '95687', lat: 38.333213, lng:-121.9793527},
  {street: '297 Bedford Ave.', city: 'Tustin', zip: '92780', lat: 33.7372177, lng:-117.8135579},
  {street: '299 Harvey Street', city: 'Davis', zip: '95616', lat: 38.5449065, lng:-121.7405167},
  {street: '3 Essex Lane', city: 'Huntington Beach', zip: '92647', lat: 33.7007476, lng:-117.9917161},
  {street: '3 Main Street', city: 'Hacienda Heights', zip: '91745', lat: 34.006988, lng:-117.971893},
  {street: '31 Summerhouse St.', city: 'San Bernardino', zip: '92404', lat: 34.1585191, lng:-117.2554498},
  {street: '324 Kent Street', city: 'Oxnard', zip: '93030', lat: 34.2096643, lng:-119.1961721},
  {street: '335 College Rd.', city: 'Sacramento', zip: '95823', lat: 38.446052, lng:-122.721301},
  {street: '35 E. Oklahoma Court', city: 'Huntington Park', zip: '90255', lat: 35.0077519, lng:-97.092877},
  {street: '397 Hillcrest Street', city: 'Pomona', zip: '91766', lat: 34.0723506, lng:-117.7622933},
  {street: '399 Mulberry St.', city: 'South Gate', zip: '90280', lat: 40.725116, lng:-73.9945268},
  {street: '4 Elmwood Court', city: 'South San Francisco', zip: '94080', lat: 37.6330975, lng:-122.4498277},
  {street: '4 Lower River Dr.', city: 'Los Angeles', zip: '90022', lat: 33.9802951, lng:-118.3811094},
  {street: '40 Lawrence Street', city: 'Fairfield', zip: '94533', lat: 38.244383, lng:-122.051839},
  {street: '404 Chapel St.', city: 'El Cajon', zip: '92021', lat: 32.8109656, lng:-116.9189605},
  {street: '405 Jefferson Ave.', city: 'La Habra', zip: '90631', lat: 33.7741511, lng:-118.04067},
  {street: '45 Union St.', city: 'San Jose', zip: '95123', lat: 37.3244516, lng:-121.8830564},
  {street: '46 S. Thomas Road', city: 'San Jose', zip: '95116', lat: 37.3484395, lng:-121.8131453},
  {street: '468 Leeton Ridge Dr.', city: 'Bellflower', zip: '90706', lat: 33.8749628, lng:-118.1214468},
  {street: '48 Armstrong Ave.', city: 'Chino', zip: '91710', lat: 34.0120229, lng:-117.6786847},
  {street: '51 Plumb Branch Ave.', city: 'Azusa', zip: '91702', lat: 34.1336186, lng:-117.9075627},
  {street: '511 Argyle Street', city: 'Los Angeles', zip: '90034', lat: 34.1044156, lng:-118.325252},
  {street: '52 Trenton Street', city: 'La Puente', zip: '91744', lat: 34.0274622, lng:-117.9307584},
  {street: '54 Highland Ave.', city: 'Anaheim', zip: '92801', lat: 33.8350649, lng:-117.7680486},
  {street: '541 Maiden Drive', city: 'Hesperia', zip: '92345', lat: 34.3627106, lng:-117.2911248},
  {street: '56 Tanglewood Street', city: 'Sylmar', zip: '91342', lat: 34.3058279, lng:-118.4571974},
  {street: '566 Pacific St.', city: 'San Diego', zip: '92126', lat: 32.7101709, lng:-117.1711309},
  {street: '572 Pawnee Street', city: 'Fremont', zip: '94536', lat: 37.5116275, lng:-121.922271},
  {street: '573 Deerfield St.', city: 'Van Nuys', zip: '91406', lat: 34.1985119, lng:-118.4980744},
  {street: '574 Mayfair Drive', city: 'Sunnyvale', zip: '94087', lat: 37.3492097, lng:-122.0326019},
  {street: '6 Bridgeton Ave.', city: 'Los Angeles', zip: '90063', lat: 34.0440239, lng:-118.1854042},
  {street: '6 Lake View Lane', city: 'Antioch', zip: '94509', lat: 38.0056834, lng:-121.793389},
  {street: '6 Manor Station Ave.', city: 'Livermore', zip: '94550', lat: 37.6822275, lng:-121.7733849},
  {street: '601 East Glenridge Lane', city: 'Rosemead', zip: '91770', lat: 34.0617365, lng:-118.0830047},
  {street: '633 Bellevue Dr.', city: 'Fontana', zip: '92335', lat: 34.083787, lng:-117.4673845},
  {street: '641 N. Gartner St.', city: 'Vista', zip: '92083', lat: 33.2134436, lng:-117.2512559},
  {street: '65 Myers Street', city: 'Oxnard', zip: '93033', lat: 34.1599885, lng:-119.1274334},
  {street: '660 Old Strawberry Drive', city: 'Van Nuys', zip: '91405', lat: 34.1449993, lng:-118.5037494},
  {street: '666 Mill Avenue', city: 'San Jose', zip: '95111', lat: 37.2856632, lng:-121.8277925},
  {street: '688 Sunset Dr.', city: 'Vallejo', zip: '94591', lat: 38.0936867, lng:-122.2208212},
  {street: '701 Windsor Avenue', city: 'Indio', zip: '92201', lat: 33.7251778, lng:-116.2377913},
  {street: '7025 Fawn Street', city: 'San Jose', zip: '95112', lat: 37.2665942, lng:-121.9244051},
  {street: '708 Gonzales Dr.', city: 'Alameda', zip: '94501', lat: 37.7712165, lng:-122.2824021},
  {street: '7093 White Street', city: 'North Hills', zip: '91343', lat: 34.2386799, lng:-118.4805569},
  {street: '710 Constitution Ave.', city: 'Chino Hills', zip: '91709', lat: 33.959453, lng:-117.7256083},
  {street: '7128 Adams Street', city: 'Victorville', zip: '92392', lat: 34.401925, lng:-117.3632681},
  {street: '7128 Saxon Drive', city: 'Montebello', zip: '90640', lat: 34.0149091, lng:-118.1064156},
  {street: '7181 Yukon Ave.', city: 'Rialto', zip: '92376', lat: 33.9190974, lng:-118.3355612},
  {street: '72 E. Academy Avenue', city: 'Los Angeles', zip: '90037', lat: 34.0078687, lng:-118.2896983},
  {street: '7293 Kirkland Drive', city: 'Costa Mesa', zip: '92627', lat: 33.6496252, lng:-117.9190418},
  {street: '7334 Pheasant Street', city: 'Salinas', zip: '93905', lat: 36.5726889, lng:-121.723384},
  {street: '7356 Liberty Lane', city: 'Lompoc', zip: '93436', lat: 34.6391501, lng:-120.4579409},
  {street: '7388 North Bradford Court', city: 'San Diego', zip: '92105', lat: 32.7348953, lng:-117.0970596},
  {street: '7403 Bayport Street', city: 'San Diego', zip: '92117', lat: 32.8250767, lng:-117.2029363},
  {street: '7509 West Brickell Ave.', city: 'Riverside', zip: '92509', lat: 25.7601793, lng:-80.1958755},
  {street: '7576 River Avenue', city: 'Union City', zip: '94587', lat: 37.5952304, lng:-122.043969},
  {street: '7614 Paris Hill St.', city: 'Ontario', zip: '91762', lat: 34.0271809, lng:-117.6306747},
  {street: '7615 Cleveland Street', city: 'Spring Valley', zip: '91977', lat: 32.7215291, lng:-116.9970153},
  {street: '767 Heather Dr.', city: 'San Francisco', zip: '94112', lat: 37.7225491, lng:-122.4410618},
  {street: '7687 Young St.', city: 'Pico Rivera', zip: '90660', lat: 33.9870228, lng:-118.0947106},
  {street: '7713 Blue Spring St.', city: 'Santee', zip: '92071', lat: 32.8678728, lng:-116.9970153},
  {street: '7713 Broad Dr.', city: 'Alhambra', zip: '91801', lat: 34.0981071, lng:-118.1202107},
  {street: '7726 Cemetery Street', city: 'Anaheim', zip: '92805', lat: 33.8395882, lng:-117.8981446},
  {street: '7746 North Pin Oak Rd.', city: 'National City', zip: '91950', lat: 35.7595731, lng:-79.0192997},
  {street: '7769 Central St.', city: 'Los Angeles', zip: '90001', lat: 33.9684889, lng:-118.2564187},
  {street: '78 Green Hill Lane', city: 'Ontario', zip: '91761', lat: 33.8646299, lng:-117.7808045},
  {street: '78 Tower Ave.', city: 'Salinas', zip: '93906', lat: 36.7272444, lng:-121.6397184},
  {street: '782 Wild Horse Ave.', city: 'Corona', zip: '92882', lat: 33.9169686, lng:-117.5498771},
  {street: '7821 Evergreen Ave.', city: 'Fresno', zip: '93727', lat: 36.7969211, lng:-119.6740436},
  {street: '785 Cherry Hill Drive', city: 'Hayward', zip: '94541', lat: 37.6812282, lng:-122.099973},
  {street: '7909 Constitution Street', city: 'Riverside', zip: '92503', lat: 33.8833867, lng:-117.4438924},
  {street: '7921 Henry Road', city: 'Panorama City', zip: '91402', lat: 34.2252697, lng:-118.442596},
  {street: '7924 Lakeview Lane', city: 'San Diego', zip: '92114', lat: 32.7040143, lng:-117.0499859},
  {street: '7931 Cemetery St.', city: 'El Cajon', zip: '92020', lat: 32.7880619, lng:-116.907653},
  {street: '7973 Evergreen St.', city: 'Compton', zip: '90221', lat: 33.8890686, lng:-118.2000277},
  {street: '80 Fremont Ave.', city: 'Chula Vista', zip: '91910', lat: 32.6497519, lng:-117.0727161},
  {street: '8028 Wintergreen St.', city: 'Modesto', zip: '95350', lat: 37.6697463, lng:-120.9991032},
  {street: '807 Arcadia St.', city: 'Cupertino', zip: '95014', lat: 37.31317, lng:-122.0723816},
  {street: '8157 Purple Finch St.', city: 'Canyon Country', zip: '91351', lat: 34.4235425, lng:-118.4720633},
  {street: '817 Courtland Street', city: 'Los Angeles', zip: '90006', lat: 34.044972, lng:-118.2830271},
  {street: '8197 Tanglewood Drive', city: 'San Pablo', zip: '94806', lat: 37.9838889, lng:-122.346753},
  {street: '8262 North New Saddle Ave.', city: 'Los Angeles', zip: '90019', lat: 34.0489277, lng:-118.3403506},
  {street: '8305 East Van Dyke St.', city: 'San Francisco', zip: '94110', lat: 37.7485824, lng:-122.4184108},
  {street: '8329 Ryan Drive', city: 'Rancho Cucamonga', zip: '91730', lat: 34.0965313, lng:-117.5848025},
  {street: '8344 Columbia Dr.', city: 'Merced', zip: '95340', lat: 37.323802, lng:-120.463462},
  {street: '8426 Victoria Street', city: 'Tulare', zip: '93274', lat: 36.1979656, lng:-119.3589579},
  {street: '846 Deerfield Drive', city: 'Laguna Niguel', zip: '92677', lat: 33.5320292, lng:-117.702148},
  {street: '85 Pumpkin Hill Ave.', city: 'Simi Valley', zip: '93065', lat: 34.2753847, lng:-118.6894359},
  {street: '853 Tailwater St.', city: 'Oceanside', zip: '92054', lat: 33.1924489, lng:-117.3675233},
  {street: '854 Sulphur Springs Street', city: 'Oceanside', zip: '92056', lat: 33.1923693, lng:-117.3652787},
  {street: '856 Sulphur Springs Lane', city: 'Baldwin Park', zip: '91706', lat: 33.1195411, lng:-95.5945301},
  {street: '8568 Fieldstone Street', city: 'Wilmington', zip: '90744', lat: 33.7857948, lng:-118.2643567},
  {street: '858 Cypress Street', city: 'Los Angeles', zip: '90042', lat: 34.1291437, lng:-118.2620102},
  {street: '8593 Princeton St.', city: 'Fountain Valley', zip: '92708', lat: 33.7168761, lng:-117.9600466},
  {street: '866 Nut Swamp Ave.', city: 'San Pedro', zip: '90731', lat: 40.3665338, lng:-74.1173099},
  {street: '878 Woodland St.', city: 'Colton', zip: '92324', lat: 34.0739016, lng:-117.3136547},
  {street: '88 Buttonwood St.', city: 'Folsom', zip: '95630', lat: 38.668585, lng:-121.1481284},
  {street: '880 Gonzales Ave.', city: 'Sacramento', zip: '95828', lat: 38.4929881, lng:-121.3884671},
  {street: '8836 Gates Road', city: 'North Hollywood', zip: '91605', lat: 34.208195, lng:-118.3987842},
  {street: '8839 N. Shipley Dr.', city: 'Hawthorne', zip: '90250', lat: 33.9127807, lng:-118.3520389},
  {street: '8892 Sunset St.', city: 'Pacoima', zip: '91331', lat: 34.2570374, lng:-118.4279933},
  {street: '89 Cemetery Avenue', city: 'Pittsburg', zip: '94565', lat: 37.9577149, lng:-121.8710262},
  {street: '89 West Belmont Drive', city: 'Paramount', zip: '90723', lat: 33.8977737, lng:-118.1649291},
  {street: '8910 Hanover Avenue', city: 'Napa', zip: '94558', lat: 38.2966989, lng:-122.291695},
  {street: '895 S. La Sierra Court', city: 'Hayward', zip: '94544', lat: 34.0522342, lng:-118.2436849},
  {street: '8954 NW. Westport St.', city: 'San Jose', zip: '95127', lat: 37.373498, lng:-121.7594384},
  {street: '8966 Eagle St.', city: 'Los Angeles', zip: '90004', lat: 34.0330197, lng:-118.1969878},
  {street: '8994 North Snake Hill Street', city: 'Daly City', zip: '94015', lat: 37.6868442, lng:-122.4687812},
  {street: '9 Bank Road', city: 'Santa Ana', zip: '92701', lat: 33.7463915, lng:-117.8604472},
  {street: '9 Greystone Avenue', city: 'San Francisco', zip: '94122', lat: 38.5145636, lng:-122.4848266},
  {street: '9107 Old Ridgewood Street', city: 'Los Angeles', zip: '90044', lat: 33.9478802, lng:-118.2935891},
  {street: '9121 Pine Ave.', city: 'Bakersfield', zip: '93306', lat: 35.4516124, lng:-118.7897558},
  {street: '92 North Deerfield Drive', city: 'Santa Ana', zip: '92704', lat: 33.7005915, lng:-117.8947287},
  {street: '9229 Olive Rd.', city: 'Santa Ana', zip: '92703', lat: 33.7582603, lng:-117.8773819},
  {street: '9260 Argyle Street', city: 'Chula Vista', zip: '91911', lat: 32.6059744, lng:-117.0441009},
  {street: '929 Rock Maple St.', city: 'Los Angeles', zip: '90066', lat: 34.0108778, lng:-118.4715894},
  {street: '9355 2nd Drive', city: 'San Diego', zip: '92154', lat: 32.5967198, lng:-116.9028125},
  {street: '9373 Canal St.', city: 'Fremont', zip: '94538', lat: 37.4090589, lng:-121.9001811},
  {street: '9393 SE. Highland St.', city: 'San Marcos', zip: '92069', lat: 33.1630271, lng:-117.1617685},
  {street: '9476 Fieldstone Road', city: 'Sunnyvale', zip: '94086', lat: 37.371859, lng:-122.0212337},
  {street: '9600 Rockland Drive', city: 'Fresno', zip: '93722', lat: 36.8745366, lng:-119.7711467},
  {street: '971 Bow Ridge St.', city: 'Los Angeles', zip: '90003', lat: 33.9657994, lng:-118.2731269},
  {street: '971 West Charles St.', city: 'Hanford', zip: '93230', lat: 36.3255459, lng:-119.6570704},
  {street: '971 West Garfield Street', city: 'San Jose', zip: '95122', lat: 37.3304014, lng:-121.8391808},
  {street: '974 S. Shipley St.', city: 'Milpitas', zip: '95035', lat: 37.4323341, lng:-121.8995741},
  {street: '98 Mayfair St.', city: 'Porterville', zip: '93257', lat: 36.06523, lng:-119.0167679},
  {street: '9879 James Ave.', city: 'Moreno Valley', zip: '92553', lat: 33.934902, lng:-117.245056},
  {street: '9966 Lilac Street', city: 'Bakersfield', zip: '93309', lat: 35.4104878, lng:-119.0173509},
]

PHOTOS = {
  structure: [
    "https://s3-us-west-1.amazonaws.com/pillow-app/outside/adirondack-british-columbia-canada-1516047.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/outside/afternoon-architecture-chairs-271815.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/outside/alley-architecture-building-210017.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/outside/architecture-blue-water-buildings-261102.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/outside/bench-chairs-daylight-1097174.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/outside/botanical-cacti-cactus-256355.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/outside/chair-pool-porch-279730.jpg",
  ],
  bed: [
    "https://s3-us-west-1.amazonaws.com/pillow-app/bed/apartment-architectural-bedroom-276508.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/bed/apartment-art-bedroom-706137.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/bed/apartment-beach-bed-271643.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/bed/apartment-bedroom-bookcase-1027509.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/bed/architecture-bed-bedroom-271743.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/bed/bed-bedroom-clean-775219.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/bed/bed-bedroom-comfort-1148927.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/bed/bed-bedroom-contemporary-1267438.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/bed/bed-bedroom-contemporary-1329711.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/bed/bed-bedroom-furniture-279746.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/bed/bedroom-beds-interior-design-260553.jpg"
  ],
  bath: [
    "https://s3-us-west-1.amazonaws.com/pillow-app/bath/antiques-bathroom-bathtub-1222554.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/bath/apartment-architecture-bath-towels-271631.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/bath/apartment-bath-bathroom-1457847.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/bath/apartment-bath-bathroom-358592.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/bath/architecture-bath-bathroom-1454804.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/bath/architecture-bathroom-bathtub-1543442.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/bath/bath-bathroom-cabinet-342800.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/bath/bathroom-bulb-comfort-room-589062.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/bath/architecture-bathroom-bathtub-1370763.jpg"
  ],
  outside: [
    "https://s3-us-west-1.amazonaws.com/pillow-app/structure/amsterdam-architectural-design-architecture-600622.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/structure/apartment-architectural-design-architecture-279614.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/structure/apartment-architectural-design-architecture-323780.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/structure/apartment-architecture-balcony-347141.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/structure/architecture-balcony-building-534182.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/structure/architecture-beautiful-exterior-106399.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/structure/architecture-buildings-cars-8155.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/structure/architecture-bungalow-chimney-731082.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/structure/architecture-cliffside-cold-789380.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/structure/architecture-lake-landscape-37650.jpg",
  ],
  inside: [
    "https://s3-us-west-1.amazonaws.com/pillow-app/office/apartment-architecture-armchair-271805.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/office/apartment-architecture-art-276724.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/office/apartment-architecture-artist-447592.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/office/apartment-architecture-black-and-white-276511.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/office/apartment-architecture-book-265004.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/office/apartment-architecture-bookcase-257344.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/office/apartment-architecture-bookcase-271795.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/office/apartment-architecture-bookcase-271816.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/office/apartment-architecture-carpet-584399.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/office/apartment-architecture-ceiling-259962.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/office/apartment-architecture-chair-269252.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/office/apartment-architecture-chair-892618.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/office/architecture-blank-box-205321.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/office/architecture-building-design-1309897.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/office/architecture-cabinets-carpet-245208.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/office/bookcase-chairs-clean-667838.jpg"
  ],
  kitchen: [
    "https://s3-us-west-1.amazonaws.com/pillow-app/kitchen/apartment-architecture-cabinet-273843.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/kitchen/apartment-architecture-cabinets-1757321.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/kitchen/apartment-architecture-cabinets-533157.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/kitchen/apartment-architecture-ceiling-276554.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/kitchen/apartment-blinds-cabinets-349749.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/kitchen/apartment-ceiling-chairs-280232.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/kitchen/architecture-backsplash-cabinets-279648.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/kitchen/bazaar-bottles-business-1596.textClipping",
    "https://s3-us-west-1.amazonaws.com/pillow-app/kitchen/bazaar-bottles-business-15964.jpg",
    "https://s3-us-west-1.amazonaws.com/pillow-app/kitchen/counter-home-house-1358900.jpg"
  ]
}