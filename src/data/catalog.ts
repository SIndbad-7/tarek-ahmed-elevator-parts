import type { ElevatorPart } from '../types';

export const ELEVATOR_PARTS: ElevatorPart[] = [
  {
    id: 'part-01',
    code: 'GTM-55-630',
    name: 'Geared Traction Machine / Motor',
    category: 'Motors & Traction',
    specs: '5.5 kW, 1.0 m/s, 400V 3-Phase, for 630 kg passenger elevator.',
    technicalBullets: [
      'Motor Rating: 5.5 kW @ 50/60 Hz',
      'Rated Speed: 1.0 m/s (up to 8 stops)',
      'Working Voltage: 400V 3-Phase AC',
      'Rated Duty: 630 kg (8 Persons Capacity)',
      'High-grade worm gearbox with quiet electromagnetic brake assembly',
      'Dual insulation class F with thermal monitoring thermistors'
    ],
    referencePrice: 1850.00,
    unit: 'Unit',
    leadTime: 'In Stock (Immediate Dispatch)',
    compatibility: ['Otis', 'Schindler', 'KONE', 'Mitsubishi', 'Thyssenkrupp', 'Generic'],
    standards: ['EN81-20', 'EN81-50', 'CE Directive 2014/33/EU', 'ISO 9001'],
    badge: 'Heavy Duty Traction',
    schematicType: 'traction-motor'
  },
  {
    id: 'part-02',
    code: 'DOS-VVVF-800',
    name: 'Door Operator System (Complete Header Assembly)',
    category: 'Door Systems',
    specs: 'VVVF automatic center-opening / side-opening 2-panel operator (800mm clear opening).',
    technicalBullets: [
      'Clear Opening Width: 800 mm (OP 800)',
      'Motion Profile: Integrated closed-loop VVVF inverter control',
      'Configuration: 2-Panel Center-Opening / Side-Opening compatible',
      'Harmonic silent belt drive with position optical encoder',
      'Pre-assembled header track, vane couplers, and electronic control box',
      'Obstruction detection feedback with gentle auto-reopen logic'
    ],
    referencePrice: 520.00,
    unit: 'Complete Header Assembly',
    leadTime: 'In Stock (Ready for Dispatch)',
    compatibility: ['Otis', 'Schindler', 'KONE', 'Mitsubishi', 'Thyssenkrupp', 'Generic'],
    standards: ['EN81-20 Clause 5.3.6', 'CE', 'ISO 9001'],
    badge: 'VVVF Intelligent',
    schematicType: 'door-operator'
  },
  {
    id: 'part-03',
    code: 'TWR-10-819',
    name: 'Elevator Traction Steel Wire Ropes',
    category: 'Ropes & Suspension',
    specs: '10mm 8x19S+FC dual tensile steel core rope (Price per 100m reel).',
    technicalBullets: [
      'Nominal Diameter: 10 mm (Tolerance +2% / 0%)',
      'Construction: 8x19S + FC (Fiber Core lubricated Sisal)',
      'Tensile Grade: Dual tensile 1370 / 1770 N/mm²',
      'Reel Length: 100 meters standard reel',
      'Special internal synthetic oil impregnating compound',
      'High fatigue endurance exceeding 2,500,000 bending cycles'
    ],
    referencePrice: 290.00,
    unit: '100m Reel',
    leadTime: 'In Stock (Warehouse Stocked)',
    compatibility: ['Otis', 'Schindler', 'KONE', 'Mitsubishi', 'Thyssenkrupp', 'Generic'],
    standards: ['ISO 4344:2004', 'EN 12385-5', 'DIN 3062'],
    badge: 'High Fatigue Life',
    schematicType: 'wire-rope'
  },
  {
    id: 'part-04',
    code: 'OSG-BD-160',
    name: 'Bi-directional Overspeed Governor',
    category: 'Safety & Braking',
    specs: 'Rated speed 1.0 m/s – 1.6 m/s, cast iron pulley with safety switch.',
    technicalBullets: [
      'Rated Elevator Speed: 1.0 m/s – 1.6 m/s',
      'Tripping Speed: Calibration range 1.15 m/s – 1.95 m/s',
      'Action: Bi-directional centrifugal clamping mechanism',
      'Pulley Material: Precision machined ASTM Class 35 Cast Iron',
      'Integrated IP54 electrical trip safety limit switch',
      'Counterweight tensioner pulley bracket kit included'
    ],
    referencePrice: 210.00,
    unit: 'Unit with Tensioner',
    leadTime: 'In Stock (Immediate Dispatch)',
    compatibility: ['Otis', 'Schindler', 'KONE', 'Mitsubishi', 'Thyssenkrupp', 'Generic'],
    standards: ['EN81-20', 'EN81-50:2014 Section 5.6.2', 'CE Safety Component'],
    badge: 'EN81-50 Certified',
    schematicType: 'overspeed-governor'
  },
  {
    id: 'part-05',
    code: 'PSG-1000-16',
    name: 'Instantaneous / Progressive Safety Gear Pair',
    category: 'Safety & Braking',
    specs: 'Rated load up to 1000 kg, 9mm–16mm guide rail thickness.',
    technicalBullets: [
      'Total Permissible Mass (P+Q): Up to 1,000 kg',
      'Guide Rail Blade Thickness (k): 9 mm to 16 mm (T-rails)',
      'Braking Mechanism: Progressive spring-loaded hardened steel wedges',
      'Deceleration Rate: Controlled within 0.2g to 1.0g per code requirements',
      'Supplied as synchronized left & right matched pair with connecting linkage',
      'Includes safety circuit electrical interlocking microswitch'
    ],
    referencePrice: 340.00,
    unit: 'Matched Pair (LH + RH)',
    leadTime: 'In Stock (Ready for Dispatch)',
    compatibility: ['Otis', 'Schindler', 'KONE', 'Mitsubishi', 'Thyssenkrupp', 'Generic'],
    standards: ['EN81-20', 'EN81-50 Clause 5.6.2.1', 'CE Certified Type Test'],
    badge: 'Critical Life-Safety',
    schematicType: 'safety-gear'
  },
  {
    id: 'part-06',
    code: 'HYB-EN81-175',
    name: 'Hydraulic / Oil Buffer',
    category: 'Safety & Braking',
    specs: 'Stroke length 80mm–175mm, rated speed ≤ 1.6 m/s, EN81 certified.',
    technicalBullets: [
      'Maximum Rated Speed: ≤ 1.6 m/s',
      'Total Buffer Stroke Length: 175 mm (heavy duty deceleration curve)',
      'Total Mass Range: 600 kg – 3,200 kg',
      'Hydraulic Fluid: Shell Tellus S2 V46 pre-filled with oil level sight glass',
      'Corrosion-resistant hard chrome plated hydraulic piston rod',
      'Self-resetting safety switch compliant with pit inspection protocols'
    ],
    referencePrice: 145.00,
    unit: 'Unit',
    leadTime: 'In Stock (Immediate Dispatch)',
    compatibility: ['Otis', 'Schindler', 'KONE', 'Mitsubishi', 'Thyssenkrupp', 'Generic'],
    standards: ['EN81-20:2014 Clause 5.8.2', 'EN81-50 Clause 5.5', 'CE'],
    badge: 'Pit & Buffer EN81',
    schematicType: 'hydraulic-buffer'
  },
  {
    id: 'part-07',
    code: 'COP-SS304-TFT',
    name: 'Complete Car Operating Panel (COP) & Hall Stations',
    category: 'Electronics & Controls',
    specs: 'Brushed 304 stainless steel, dot-matrix/TFT display, braille push buttons, key switch.',
    technicalBullets: [
      'Faceplate Material: 2.0 mm Heavy Gauge Brushed AISI 304 Stainless Steel',
      'Display: 7-inch Crisp High-Contrast Color TFT floor/direction & message screen',
      'Buttons: Vandal-resistant tactile micro-pushbuttons with tactile Braille code & blue LED halos',
      'Emergency Controls: Alarm bell button, yellow telephone communication aperture, firefighter switch',
      'Integrated Inspection & Attendant keyed toggle switches',
      'Universal CAN-bus & parallel terminal interface board pre-wired'
    ],
    referencePrice: 380.00,
    unit: 'Complete Assembly',
    leadTime: 'In Stock (1-2 Days Custom Etch)',
    compatibility: ['Otis', 'Schindler', 'KONE', 'Mitsubishi', 'Thyssenkrupp', 'Generic'],
    standards: ['EN81-70 (Accessibility for persons with disabilities)', 'EN81-71 (Vandal Resistance)', 'CE'],
    badge: 'AISI 304 Stainless',
    schematicType: 'operating-panel'
  },
  {
    id: 'part-08',
    code: 'ECC-VVVF-380',
    name: 'Main Integrated Elevator Control Cabinet',
    category: 'Electronics & Controls',
    specs: '380V VVVF microprocessor inverter controller with full motherboard and ARD support.',
    technicalBullets: [
      'Nominal Supply: 380V / 400V 3-Phase 50/60 Hz',
      'Drive Integration: Integrated 32-bit dual-core DSP with high-precision vector VVVF drive',
      'ARD (Automatic Rescue Device): Pre-configured dry contact battery rescue interface',
      'Floor Management: Up to 32 landings simplex, duplex, or group dispatch',
      'Fault Logging: 100 timestamped event ring-buffer memory with handheld LCD programmer',
      'Compact wall/floor mount industrial powder-coated IP41 enclosure'
    ],
    referencePrice: 1450.00,
    unit: 'Complete Controller Cabinet',
    leadTime: 'In Stock (Configured to Spec)',
    compatibility: ['Otis', 'Schindler', 'KONE', 'Mitsubishi', 'Thyssenkrupp', 'Generic'],
    standards: ['EN81-20', 'EN12015 / EN12016 EMC Compliance', 'CE Directive'],
    badge: 'Flagship Controller',
    schematicType: 'control-cabinet'
  },
  {
    id: 'part-09',
    code: 'GSS-PU-4PC',
    name: 'Guide Shoe Set (Car & Counterweight)',
    category: 'Shaft & Mechanical',
    specs: '10mm & 16mm roller guide shoes with replaceable polyurethane inserts (Set of 4).',
    technicalBullets: [
      'Guide Rail Compatibility: T-Profile Rails 9mm, 10mm, and 16mm',
      'Package Includes: Set of 4 heavy duty guide shoes (2 Upper + 2 Lower)',
      'Liner Inserts: Ultra-low-friction oil-lubricated high-density polyurethane',
      'Housing: Die-cast ductile iron housing with slotted vibration-dampening adjustment slots',
      'Spring suspension dampeners eliminate cabin vibration and shaft noise',
      'Automatic wick lubricator oiler can mounts included'
    ],
    referencePrice: 115.00,
    unit: 'Set of 4 Units',
    leadTime: 'In Stock (Immediate Dispatch)',
    compatibility: ['Otis', 'Schindler', 'KONE', 'Mitsubishi', 'Thyssenkrupp', 'Generic'],
    standards: ['ISO 7465 Guide Rails Compatible', 'DIN EN 81'],
    badge: 'Low Friction & Noise',
    schematicType: 'guide-shoe'
  },
  {
    id: 'part-10',
    code: 'DLC-194-IR',
    name: 'Infrared Door Light Curtain (Safety Sensor)',
    category: 'Door Systems',
    specs: '194 infrared beam multi-point protection screen, 20mm–1800mm detection height.',
    technicalBullets: [
      'Number of Beams: 194 infrared crossed scanning optical beams',
      'Protection Height: 20 mm to 1,800 mm above car sill',
      'Operating Range: 0 to 4,000 mm door opening clearance',
      'Response Time: < 45 milliseconds instant cutoff signal',
      'Ambient Light Immunity: Up to 100,000 Lux sunlight tolerance',
      'Includes transmitter bar, receiver bar, power controller box, and flexible high-flex cables'
    ],
    referencePrice: 95.00,
    unit: 'Transmitter + Receiver Set',
    leadTime: 'In Stock (Warehouse Stocked)',
    compatibility: ['Otis', 'Schindler', 'KONE', 'Mitsubishi', 'Thyssenkrupp', 'Generic'],
    standards: ['EN81-20 Clause 5.3.6.2.2.1', 'CE Mark', 'IP54 Sealed'],
    badge: '194 Optical Beams',
    schematicType: 'light-curtain'
  }
];

export const ELEVATOR_BRANDS = [
  'Otis Elevator Company',
  'Schindler Elevator Corporation',
  'KONE Corporation',
  'Mitsubishi Electric Elevators',
  'TK Elevator (Thyssenkrupp)',
  'Fuji / Fujitec',
  'Hitachi Elevators',
  'Toshiba Elevator',
  'Generic / Custom Hydraulic System',
  'Generic / Custom Traction System',
  'Other / Unspecified Brand'
];
