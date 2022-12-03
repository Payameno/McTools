INSERT INTO users (name, email, password)
VALUES 
('Payam', 'user1@gmail.com', '123456'),
('Armin', 'user2@@gmai.com', '123456'),
('Aryan', 'user3@gmail.com', '123456');

INSERT INTO products (name, description, brand, quantity, price_cents, category, instock)
VALUES 
('INFINITY BASE MODEL 3D PRINTER (BM)', 'title: Base Model, Single Extruder Professional 3D Printer "Base" Model 3D Printer Aluminum frame, No heated bed, No Touch Interface, Requires direct connection to computer via USB, BENEFITS, Create prototypes in house, Increase production with specialized 3D printed tools, Replace unserviceable parts on demand, Produce difficult to source parts, Reproduce obsolete parts, Reduce inventory costs, Manage supply chain risks, Manufacture in different materials', 'REVOLUTION', 0, 411950, '3D Printers', true),
('KEB-606N KENT SINKER EDM MACHINE', 'FEATURES, 60 AMP power supply, Built-in 3-axis DRO System integrated with machine for positioning and auto depth-stop setting,  Up to 500 programmable steps for setting all machining parameters for even the most complex jobs, Electric discharge circuit design for fast burning with reduced electrode wear and uniform surface finish, Precision linear ways with oil immersed ball screw, DC Servo Motor on z-axis with power rapid up/down rapid traverse motor, Centralized one-shot lubrication system provides lubrication to all points', 'KENT USA', 0, 5325000, 'EDM Machines', true),
('FOWLER 1.4-6IN. ELECTRONIC BORE GAGE', 'title: X-Series, Electronic Bore Gage Set, The industries 2 most popular bore gage ranges combined in one easy-to-use electronic set!, FEATURES, Self-centering, Carbide anvils, Includes 2" contact extension, Easily adjustable, Shop hardened case', 'FOWLER', 0, 59119, 'Electronic Bore Gages', true),
('KBC .70-1.5IN./18-35MM DIGITAL BORE GAGE', 'title: Precision Digital Bore Gage, FEATURES, Data output RS 232, Inch/Metric conversion, Resolution: .00005" (.002mm), Extra large LCD 360° rotation, Easily calibrated by one button, Easily realize the blind measuring by freezing minimum value, Various measuring head for different size of bore measuring, Double Display: Digital & Electronic Scale, Relative measurement/Absolute measurement, Directly measure the actual value of workpiece', 'KBC', 0, 37192, 'Electronic Bore Gages', true),
('DRILL-OUT 7PC NO. 5/6-1/2 EXTRACTOR KIT', 'FEATURES, Removes broken bolts from below surface, flush surface, as well as rusted out bolts in a fraction of the time as compared to tools designed for the same purpose, Can be used with any 3/8" reversible variable speed hand drill', 'ALDEN', 0, 11772, 'Bolt and Screw Extractors', true),
('KBC MICRO CHUCK', 'FEATURES, For use in drill press or hand-held tools, Suitable for 60 to 80 wire gauge drills, Grips drills firmly and accurately, Can be held in any 1/8" or 3/16" collet or larger adjustable drill chuck', 'KBC', 0, 603, 'Pin Vises', true);

INSERT INTO product_pictures (product_id, url)
VALUES 
(1, 'https://imgur.com/a/YL5WXXi',),
(2, 'https://imgur.com/a/8K3CmNX',),
(3, 'https://imgur.com/a/rcFr1D9',),
(4, 'https://imgur.com/a/4hadzW7',),
(5, 'https://imgur.com/a/rs1cdsp',),
(6, 'https://imgur.com/a/lH74uBL',);