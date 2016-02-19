
var myData = [
	{"name": "Aileen Jacobs", "email": "convallis.ante.lectus@euneque.co.uk", "dateEmployed": "01/01/2016", "phone": "1-862-996-4921"},
	{"name": "Karen Delgado", "email": "dapibus@Morbiquis.ca", "dateEmployed": "10/03/2014", "phone": "403-8410"},
	{"name": "Ursula Melendez", "email": "sit.amet@nullaInteger.edu", "dateEmployed": "07/06/2016", "phone": "1-818-102-1801"},
	{"name": "Kalia Chan", "email": "commodo.ipsum.Suspendisse@Sed.net", "dateEmployed": "12/09/2014", "phone": "535-2986"},
	{"name": "Mollie York", "email": "nec.tempus.mauris@incursus.com", "dateEmployed": "12/14/2014", "phone": "1-847-755-1989"},
	{"name": "Sheila Cannon", "email": "porttitor@risusDuisa.net", "dateEmployed": "08/31/2014", "phone": "870-3657"},
	{"name": "Madonna Miller", "email": "Quisque@Integertinciduntaliquam.ca", "dateEmployed": "11/07/2015", "phone": "1-841-493-1375"},
	{"name": "Lillith House", "email": "convallis@Crasconvallis.co.uk", "dateEmployed": "12/13/2015", "phone": "297-6781"},
	{"name": "Tashya Dominguez", "email": "Nunc.mauris.Morbi@erosturpis.ca", "dateEmployed": "10/14/2015", "phone": "1-505-698-4389"},
	{"name": "Sigourney Hayes", "email": "lacus@ultriciesligula.org", "dateEmployed": "10/16/2014", "phone": "509-6812"},
	{"name": "Myles Foster", "email": "dignissim@lacinia.net", "dateEmployed": "05/17/2015", "phone": "567-6315"},
	{"name": "Graiden Hammond", "email": "elit.sed.consequat@Fusce.org", "dateEmployed": "05/23/2016", "phone": "1-108-612-8288"},
	{"name": "Eaton Hyde", "email": "velit@ac.edu", "dateEmployed": "02/05/2015", "phone": "1-564-264-5577"},
	{"name": "Callum Burch", "email": "non.ante.bibendum@Integer.co.uk", "dateEmployed": "12/07/2015", "phone": "103-8567"},
	{"name": "Yoshi Gardner", "email": "dui@Proin.net", "dateEmployed": "03/17/2015", "phone": "958-3717"},
	{"name": "Nerea Mclaughlin", "email": "leo.elementum.sem@velpede.org", "dateEmployed": "09/27/2015", "phone": "1-237-387-4991"},
	{"name": "Jeremy Mathis", "email": "ad.litora.torquent@lectus.net", "dateEmployed": "08/16/2014", "phone": "716-0396"},
	{"name": "Addison Garrett", "email": "pede.Suspendisse.dui@mauriserat.ca", "dateEmployed": "12/16/2014", "phone": "1-309-866-6630"},
	{"name": "Rudyard Kent", "email": "augue.scelerisque@acnulla.org", "dateEmployed": "01/13/2015", "phone": "1-352-173-7550"},
	{"name": "Kaye Horne", "email": "taciti.sociosqu@hymenaeosMaurisut.edu", "dateEmployed": "11/01/2015", "phone": "1-202-175-5273"},
	{"name": "Summer Frost", "email": "pede@Cumsociis.ca", "dateEmployed": "04/05/2015", "phone": "282-3223"},
	{"name": "Garrison Case", "email": "nibh.dolor@dolor.net", "dateEmployed": "11/23/2015", "phone": "1-827-865-5989"},
	{"name": "Sade Kirkland", "email": "molestie.tortor@faucibus.org", "dateEmployed": "09/15/2015", "phone": "929-8155"},
	{"name": "Sacha Hill", "email": "vel@faucibusutnulla.net", "dateEmployed": "10/28/2015", "phone": "1-715-944-0604"},
	{"name": "Vaughan Mills", "email": "pellentesque.eget@cursusnon.ca", "dateEmployed": "05/12/2016", "phone": "1-705-253-2686"},
	{"name": "Paula Cantu", "email": "ligula.Donec.luctus@ut.net", "dateEmployed": "07/21/2016", "phone": "1-982-279-2329"},
	{"name": "Unity Faulkner", "email": "dui@etnetus.com", "dateEmployed": "08/25/2015", "phone": "1-589-791-6453"},
	{"name": "Tatyana Diaz", "email": "enim.non@velitSedmalesuada.net", "dateEmployed": "05/28/2016", "phone": "1-641-790-2400"},
	{"name": "Idola Brown", "email": "arcu@purus.com", "dateEmployed": "09/06/2014", "phone": "1-639-605-6805"},
	{"name": "Kitra Fowler", "email": "ut@Infaucibus.edu", "dateEmployed": "06/17/2016", "phone": "163-1208"},
	{"name": "Phillip Adams", "email": "consectetuer.cursus.et@faucibus.net", "dateEmployed": "12/23/2014", "phone": "547-8487"},
	{"name": "Wing Mayer", "email": "semper@diam.net", "dateEmployed": "12/19/2015", "phone": "1-345-875-0842"},
	{"name": "Catherine Becker", "email": "massa@utnullaCras.org", "dateEmployed": "12/10/2015", "phone": "1-162-873-0055"},
	{"name": "Cleo Moreno", "email": "lobortis.risus.In@tinciduntneque.ca", "dateEmployed": "09/24/2014", "phone": "160-1253"},
	{"name": "Walter Mccullough", "email": "aliquam.enim@aliquetodioEtiam.co.uk", "dateEmployed": "10/24/2014", "phone": "583-6439"},
	{"name": "Brooke Armstrong", "email": "Phasellus.dapibus.quam@varius.ca", "dateEmployed": "04/09/2016", "phone": "1-499-313-6608"},
	{"name": "Eden White", "email": "mus@placeratorcilacus.co.uk", "dateEmployed": "02/12/2015", "phone": "1-417-449-0989"},
	{"name": "Mia Anthony", "email": "imperdiet@risus.org", "dateEmployed": "07/20/2016", "phone": "537-7080"},
	{"name": "Orli Bond", "email": "enim.non@Quisque.net", "dateEmployed": "10/28/2015", "phone": "308-9023"},
	{"name": "Andrew Petersen", "email": "sit@fermentumvel.edu", "dateEmployed": "09/17/2015", "phone": "1-244-827-2181"},
	{"name": "Kim Valenzuela", "email": "odio.sagittis@adlitoratorquent.com", "dateEmployed": "12/15/2014", "phone": "911-6210"},
	{"name": "Shannon Roberson", "email": "Sed.id@pellentesque.ca", "dateEmployed": "03/19/2015", "phone": "1-656-696-2957"},
	{"name": "Sonia Molina", "email": "tellus.faucibus@Aliquamultricesiaculis.ca", "dateEmployed": "10/15/2015", "phone": "804-9428"},
	{"name": "Ashely Cole", "email": "Duis.at@temporloremeget.ca", "dateEmployed": "07/26/2015", "phone": "406-8365"},
	{"name": "Cora Whitehead", "email": "dignissim.pharetra@In.org", "dateEmployed": "02/01/2016", "phone": "228-6990"},
	{"name": "Colin Figueroa", "email": "Praesent@fermentumconvallisligula.co.uk", "dateEmployed": "10/20/2015", "phone": "981-0169"},
	{"name": "Lani Harper", "email": "ac.arcu@varius.net", "dateEmployed": "05/09/2016", "phone": "1-598-702-7545"},
	{"name": "Tatum Taylor", "email": "neque.In@egetmagnaSuspendisse.co.uk", "dateEmployed": "05/11/2015", "phone": "1-184-852-1119"},
	{"name": "Dorothy Flynn", "email": "dictum.eu.placerat@seddolor.com", "dateEmployed": "05/03/2016", "phone": "854-2768"},
	{"name": "Rhoda Alston", "email": "arcu.Morbi@vel.co.uk", "dateEmployed": "10/30/2014", "phone": "411-3709"},
	{"name": "Cain Allison", "email": "adipiscing@auctornonfeugiat.co.uk", "dateEmployed": "05/30/2016", "phone": "1-954-760-7851"},
	{"name": "Aurora Summers", "email": "magna.Lorem@purussapiengravida.ca", "dateEmployed": "12/29/2014", "phone": "1-250-650-4660"},
	{"name": "Tatum Hooper", "email": "Quisque.nonummy.ipsum@justonec.com", "dateEmployed": "08/05/2015", "phone": "616-5306"},
	{"name": "Rebekah Mayo", "email": "ornare.lectus@arcuCurabitur.net", "dateEmployed": "07/19/2016", "phone": "365-7034"},
	{"name": "Whoopi Sharpe", "email": "nibh.enim@Duisdignissim.co.uk", "dateEmployed": "07/26/2014", "phone": "1-856-181-0229"},
	{"name": "Price Reyes", "email": "Fusce@mauriselitdictum.net", "dateEmployed": "03/27/2016", "phone": "1-285-387-7242"},
	{"name": "Odysseus Juarez", "email": "risus.Nulla@Suspendissetristiqueneque.co.uk", "dateEmployed": "01/09/2016", "phone": "1-628-677-4423"},
	{"name": "Alma Meyer", "email": "pede@risusodio.org", "dateEmployed": "10/24/2014", "phone": "1-113-743-0111"},
	{"name": "Illana Estrada", "email": "fringilla.cursus@volutpatornarefacilisis.ca", "dateEmployed": "01/21/2016", "phone": "270-4744"},
	{"name": "Rajah Weber", "email": "ultrices.posuere@lorem.com", "dateEmployed": "01/11/2015", "phone": "1-885-377-8462"},
	{"name": "Portia Newman", "email": "accumsan.laoreet@Mauris.edu", "dateEmployed": "10/11/2015", "phone": "1-678-704-8892"},
	{"name": "Holly Hall", "email": "lectus.pede.et@morbitristique.com", "dateEmployed": "02/19/2015", "phone": "822-4745"},
	{"name": "Kamal Donovan", "email": "condimentum.eget@cursus.edu", "dateEmployed": "01/08/2016", "phone": "825-1278"},
	{"name": "Keith Barlow", "email": "posuere.cubilia.Curae@sedhendrerita.edu", "dateEmployed": "01/18/2016", "phone": "191-3294"},
	{"name": "Lillian Chen", "email": "eget@liberoettristique.ca", "dateEmployed": "05/08/2016", "phone": "1-545-852-6018"},
	{"name": "Graiden Tran", "email": "in.magna.Phasellus@miloremvehicula.net", "dateEmployed": "09/04/2015", "phone": "1-882-886-9254"},
	{"name": "Amber Evans", "email": "viverra.Donec@mi.co.uk", "dateEmployed": "10/14/2015", "phone": "422-7719"},
	{"name": "Wynne Benson", "email": "Cum.sociis@lectusjusto.co.uk", "dateEmployed": "06/09/2016", "phone": "1-965-825-3358"},
	{"name": "Aladdin Mccray", "email": "ut@anuncIn.org", "dateEmployed": "11/26/2014", "phone": "381-9717"},
	{"name": "Sybill Tyson", "email": "In.tincidunt@ornaretortorat.com", "dateEmployed": "04/08/2015", "phone": "349-5886"},
	{"name": "Talon Gilmore", "email": "semper@Aeneangravidanunc.ca", "dateEmployed": "12/02/2015", "phone": "1-325-794-6806"},
	{"name": "Lee Mcleod", "email": "congue.a@Classaptenttaciti.com", "dateEmployed": "10/17/2015", "phone": "451-4938"},
	{"name": "Uma Richards", "email": "sed.dolor.Fusce@consequatnecmollis.co.uk", "dateEmployed": "10/25/2014", "phone": "1-268-365-2207"},
	{"name": "Sigourney Nash", "email": "pellentesque.massa@fringillaornareplacerat.ca", "dateEmployed": "05/09/2015", "phone": "1-667-599-1685"},
	{"name": "Brett Lyons", "email": "Nunc@tinciduntDonecvitae.com", "dateEmployed": "07/11/2015", "phone": "324-3615"},
	{"name": "Leslie Gallegos", "email": "risus.odio.auctor@Aliquam.co.uk", "dateEmployed": "03/13/2015", "phone": "1-293-889-0143"},
	{"name": "Bryar Harvey", "email": "fermentum.fermentum@feugiatplacerat.co.uk", "dateEmployed": "09/10/2015", "phone": "893-8366"},
	{"name": "Malik David", "email": "felis.eget.varius@Namtempordiam.ca", "dateEmployed": "09/27/2014", "phone": "561-8470"},
	{"name": "Josiah Boone", "email": "est@eu.net", "dateEmployed": "09/11/2014", "phone": "190-1602"},
	{"name": "Oren Hughes", "email": "Quisque@Nulla.org", "dateEmployed": "02/10/2016", "phone": "297-6833"},
	{"name": "Audra Green", "email": "eget@magnanecquam.com", "dateEmployed": "05/30/2015", "phone": "1-528-410-7779"},
	{"name": "Fredericka Brooks", "email": "mollis@malesuadavel.edu", "dateEmployed": "03/10/2015", "phone": "1-169-846-1973"},
	{"name": "Blaine Dodson", "email": "sed@eget.edu", "dateEmployed": "05/11/2016", "phone": "201-5684"},
	{"name": "Chantale Thompson", "email": "pede@actellusSuspendisse.net", "dateEmployed": "10/15/2015", "phone": "1-316-964-1291"},
	{"name": "Kylynn Marquez", "email": "dolor.sit.amet@eu.edu", "dateEmployed": "12/25/2015", "phone": "113-5083"},
	{"name": "Samuel Brennan", "email": "rhoncus.Donec.est@consectetuer.com", "dateEmployed": "03/27/2016", "phone": "1-120-699-8261"},
	{"name": "Porter Foley", "email": "enim.consequat@velmauris.co.uk", "dateEmployed": "09/25/2015", "phone": "1-694-806-6790"},
	{"name": "Chava Dennis", "email": "nonummy.ut@auctorMauris.co.uk", "dateEmployed": "10/05/2015", "phone": "351-0367"},
	{"name": "Sheila Pickett", "email": "et.magna@magnis.edu", "dateEmployed": "10/16/2014", "phone": "1-547-951-5201"},
	{"name": "Yvette Haney", "email": "nunc.sed@pedeCras.com", "dateEmployed": "09/19/2014", "phone": "553-2176"},
	{"name": "Brynn Harrell", "email": "id.nunc.interdum@habitantmorbi.co.uk", "dateEmployed": "03/26/2015", "phone": "1-833-414-6117"},
	{"name": "Cynthia Porter", "email": "Curabitur.ut@Phasellusdolorelit.net", "dateEmployed": "10/04/2014", "phone": "1-603-829-6654"},
	{"name": "Hayfa Langley", "email": "nibh.dolor@primisinfaucibus.com", "dateEmployed": "08/09/2015", "phone": "456-6807"},
	{"name": "Shaeleigh Ratliff", "email": "Nam@et.com", "dateEmployed": "07/27/2015", "phone": "1-245-392-2340"},
	{"name": "Jessica Fulton", "email": "bibendum.sed.est@hymenaeosMauris.com", "dateEmployed": "06/04/2016", "phone": "337-9161"},
	{"name": "Glenna Franklin", "email": "rutrum.non@Loremipsumdolor.edu", "dateEmployed": "09/02/2015", "phone": "720-7528"},
	{"name": "Sophia Arnold", "email": "Suspendisse.dui@lobortis.co.uk", "dateEmployed": "02/17/2015", "phone": "1-591-563-7850"},
	{"name": "Rina Morgan", "email": "feugiat.placerat.velit@liberomauris.net", "dateEmployed": "11/14/2014", "phone": "875-6454"},
	{"name": "Amber Ball", "email": "Quisque@Aenean.ca", "dateEmployed": "08/11/2015", "phone": "651-3983"},
	{"name": "Odysseus Nash", "email": "purus@rutrum.co.uk", "dateEmployed": "01/08/2016", "phone": "722-7908"}
];

angular.module('arrayApp').service('svc', function() {
this.getData = function() {
		return myData;
}
})
