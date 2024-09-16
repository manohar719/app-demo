import { Component } from '@angular/core';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { KENDO_GRID } from "@progress/kendo-angular-grid";

@Component({
  selector: 'app-registry',
  standalone: true,
  imports: [LayoutModule, KENDO_GRID],
  templateUrl: './registry.component.html',
  styleUrl: './registry.component.scss'
})
export class RegistryComponent {
  public gridData: any[] = [
    {
      "_id": "66e7d48295a507631837941c",
      "assetName": "Eleven Times Square",
      "fund": "Grid Cell",
      "sector": true,
      "division": "$3,151.48",
      "assetStatus": "http://placehold.it/32x32",
      "deal": 34,
      "lifecycle": "green",
      "risk": "Karin Clayton",
      "acquisition": "female",
      "disclosure": "PYRAMAX",
      "building": "karinclayton@pyramax.com",
      "land": "+1 (831) 405-3836"
    },
    {
      "_id": "66e7d482d8d976c581c5be08",
      "assetName": "Eleven Times Square",
      "fund": "Grid Cell",
      "sector": true,
      "division": "$3,348.70",
      "assetStatus": "http://placehold.it/32x32",
      "deal": 25,
      "lifecycle": "brown",
      "risk": "Jeanine Stone",
      "acquisition": "female",
      "disclosure": "MEDIFAX",
      "building": "jeaninestone@medifax.com",
      "land": "+1 (905) 562-3619"
    },
    {
      "_id": "66e7d48280648f0adb55ef1a",
      "assetName": "Eleven Times Square",
      "fund": "Grid Cell",
      "sector": true,
      "division": "$2,303.46",
      "assetStatus": "http://placehold.it/32x32",
      "deal": 32,
      "lifecycle": "green",
      "risk": "Corina Lloyd",
      "acquisition": "female",
      "disclosure": "PHORMULA",
      "building": "corinalloyd@phormula.com",
      "land": "+1 (940) 566-2434"
    },
    {
      "_id": "66e7d48275bd9292419d7546",
      "assetName": "Eleven Times Square",
      "fund": "Grid Cell",
      "sector": true,
      "division": "$2,428.01",
      "assetStatus": "http://placehold.it/32x32",
      "deal": 39,
      "lifecycle": "green",
      "risk": "Barrett Lynch",
      "acquisition": "male",
      "disclosure": "ANDRYX",
      "building": "barrettlynch@andryx.com",
      "land": "+1 (946) 557-3691"
    },
    {
      "_id": "66e7d48210d6b98240356715",
      "assetName": "Eleven Times Square",
      "fund": "Grid Cell",
      "sector": true,
      "division": "$3,924.44",
      "assetStatus": "http://placehold.it/32x32",
      "deal": 39,
      "lifecycle": "green",
      "risk": "Coffey Lancaster",
      "acquisition": "male",
      "disclosure": "ULTRIMAX",
      "building": "coffeylancaster@ultrimax.com",
      "land": "+1 (889) 510-3198"
    },
    {
      "_id": "66e7d4825fa3d513fd7fe2b5",
      "assetName": "Eleven Times Square",
      "fund": "Grid Cell",
      "sector": false,
      "division": "$2,375.60",
      "assetStatus": "http://placehold.it/32x32",
      "deal": 31,
      "lifecycle": "brown",
      "risk": "Rosemarie Guerrero",
      "acquisition": "female",
      "disclosure": "POLARIUM",
      "building": "rosemarieguerrero@polarium.com",
      "land": "+1 (806) 586-3921"
    },
    {
      "_id": "66e7d482d10b888131fd6d5e",
      "assetName": "Eleven Times Square",
      "fund": "Grid Cell",
      "sector": false,
      "division": "$3,559.02",
      "assetStatus": "http://placehold.it/32x32",
      "deal": 20,
      "lifecycle": "blue",
      "risk": "Small Bates",
      "acquisition": "male",
      "disclosure": "TURNLING",
      "building": "smallbates@turnling.com",
      "land": "+1 (881) 465-2710"
    },
    {
      "_id": "66e7d4824d924cf8927f7bf9",
      "assetName": "Eleven Times Square",
      "fund": "Grid Cell",
      "sector": true,
      "division": "$3,572.84",
      "assetStatus": "http://placehold.it/32x32",
      "deal": 28,
      "lifecycle": "green",
      "risk": "Jefferson Riddle",
      "acquisition": "male",
      "disclosure": "NETPLODE",
      "building": "jeffersonriddle@netplode.com",
      "land": "+1 (869) 448-3698"
    },
    {
      "_id": "66e7d482dadc34bcba8b6e92",
      "assetName": "Eleven Times Square",
      "fund": "Grid Cell",
      "sector": false,
      "division": "$1,602.74",
      "assetStatus": "http://placehold.it/32x32",
      "deal": 39,
      "lifecycle": "brown",
      "risk": "Fleming Whitehead",
      "acquisition": "male",
      "disclosure": "GENMY",
      "building": "flemingwhitehead@genmy.com",
      "land": "+1 (867) 475-2055"
    },
    {
      "_id": "66e7d4823d75040d544fdfa2",
      "assetName": "Eleven Times Square",
      "fund": "Grid Cell",
      "sector": false,
      "division": "$3,194.55",
      "assetStatus": "http://placehold.it/32x32",
      "deal": 35,
      "lifecycle": "brown",
      "risk": "Walter Deleon",
      "acquisition": "male",
      "disclosure": "RUGSTARS",
      "building": "walterdeleon@rugstars.com",
      "land": "+1 (962) 468-3626"
    },
    {
      "_id": "66e7d482e774084599d1f535",
      "assetName": "Eleven Times Square",
      "fund": "Grid Cell",
      "sector": true,
      "division": "$2,054.11",
      "assetStatus": "http://placehold.it/32x32",
      "deal": 22,
      "lifecycle": "green",
      "risk": "Steele Vincent",
      "acquisition": "male",
      "disclosure": "DIGIPRINT",
      "building": "steelevincent@digiprint.com",
      "land": "+1 (990) 432-2944"
    },
    {
      "_id": "66e7d482b28eddd4b7fe5304",
      "assetName": "Eleven Times Square",
      "fund": "Grid Cell",
      "sector": false,
      "division": "$2,221.33",
      "assetStatus": "http://placehold.it/32x32",
      "deal": 25,
      "lifecycle": "green",
      "risk": "Elinor Morgan",
      "acquisition": "female",
      "disclosure": "EARBANG",
      "building": "elinormorgan@earbang.com",
      "land": "+1 (962) 444-2867"
    },
    {
      "_id": "66e7d4826a946e1927e857f7",
      "assetName": "Eleven Times Square",
      "fund": "Grid Cell",
      "sector": true,
      "division": "$2,715.74",
      "assetStatus": "http://placehold.it/32x32",
      "deal": 26,
      "lifecycle": "blue",
      "risk": "Wilkinson Hicks",
      "acquisition": "male",
      "disclosure": "KRAGGLE",
      "building": "wilkinsonhicks@kraggle.com",
      "land": "+1 (905) 533-3501"
    },
    {
      "_id": "66e7d482df28e027377adeeb",
      "assetName": "Eleven Times Square",
      "fund": "Grid Cell",
      "sector": true,
      "division": "$2,887.19",
      "assetStatus": "http://placehold.it/32x32",
      "deal": 35,
      "lifecycle": "brown",
      "risk": "Kirk Hopkins",
      "acquisition": "male",
      "disclosure": "VITRICOMP",
      "building": "kirkhopkins@vitricomp.com",
      "land": "+1 (882) 569-3777"
    },
    {
      "_id": "66e7d482cbacf8b1c92e7f23",
      "assetName": "Eleven Times Square",
      "fund": "Grid Cell",
      "sector": false,
      "division": "$1,083.47",
      "assetStatus": "http://placehold.it/32x32",
      "deal": 31,
      "lifecycle": "green",
      "risk": "Jennifer Decker",
      "acquisition": "female",
      "disclosure": "MITROC",
      "building": "jenniferdecker@mitroc.com",
      "land": "+1 (855) 455-2230"
    },
    {
      "_id": "66e7d482e366567cde450605",
      "assetName": "Eleven Times Square",
      "fund": "Grid Cell",
      "sector": false,
      "division": "$1,552.55",
      "assetStatus": "http://placehold.it/32x32",
      "deal": 22,
      "lifecycle": "green",
      "risk": "Harrell Lindsey",
      "acquisition": "male",
      "disclosure": "BUZZWORKS",
      "building": "harrelllindsey@buzzworks.com",
      "land": "+1 (948) 402-2087"
    },
    {
      "_id": "66e7d4822086879d8d557463",
      "assetName": "Eleven Times Square",
      "fund": "Grid Cell",
      "sector": false,
      "division": "$2,941.25",
      "assetStatus": "http://placehold.it/32x32",
      "deal": 25,
      "lifecycle": "green",
      "risk": "Jami Mcdaniel",
      "acquisition": "female",
      "disclosure": "CORMORAN",
      "building": "jamimcdaniel@cormoran.com",
      "land": "+1 (919) 437-2037"
    },
    {
      "_id": "66e7d4822c83b0b9aaa3691f",
      "assetName": "Eleven Times Square",
      "fund": "Grid Cell",
      "sector": true,
      "division": "$3,956.97",
      "assetStatus": "http://placehold.it/32x32",
      "deal": 32,
      "lifecycle": "blue",
      "risk": "Luella Higgins",
      "acquisition": "female",
      "disclosure": "DYNO",
      "building": "luellahiggins@dyno.com",
      "land": "+1 (926) 490-2831"
    }
  ]
}
