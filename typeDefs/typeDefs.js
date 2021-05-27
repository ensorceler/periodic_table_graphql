import {gql} from 'apollo-server';


export const typeDefs=gql`

  type Bruh{
      name:String
      work:String
  }
  type Element{
  radioactive: String
  type: String
  number_of_isotopes: Int
  discovery_year: String
  specific_heat: Float
  name: String!
  appearance: String
  atomic_mass: Float
  boil: Float
  category:String
  color: String 
  density: Float
  discovered_by:String
  melt: Float
  molar_heat: Float
  named_by: String
  atomic_number: Int
  period: Int
  phase: String
  source: String
  spectral_img:String 
  summary:String
  symbol: String
  xpos: Float
  ypos: Float
  electron_configuration: String
  electron_configuration_semantic: String
  electron_affinity: Float
  electronegativity_pauling:Float
  cpkhex: String
  shells:[String],
  ionization_energies:[String]!
 }

 type Query{
    getAllElements:[Element!]!
    getRadioactiveElements:[Element]!  
    getElementsByType(type:String!):[Element]
    getElementsByPeriod(period:Int):[Element]
 }
`;
