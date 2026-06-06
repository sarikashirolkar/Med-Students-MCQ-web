/*
 * ============================================================
 *  QUIZ DATA
 * ============================================================
 *
 *  HOW TO ADD QUESTIONS
 *  --------------------
 *  Find the chapter you want, and add objects to its `questions` array.
 *  Each question looks like this:
 *
 *      {
 *        q: "What is the question text?",
 *        options: ["First choice", "Second choice", "Third choice", "Fourth choice"],
 *        answer: 2,                       // index of the correct option (0 = first)
 *        explanation: "Why it is correct" // OPTIONAL — leave "" if none
 *      }
 *
 *  Notes:
 *   - `answer` is the position in the ORIGINAL options array. The app shuffles
 *     options on screen automatically, so don't worry about display order.
 *   - You can have any number of options (2, 3, 4, 5...).
 *   - Do NOT edit the question or answer text — just paste them in.
 * ============================================================
 */

const QUIZ_DATA = {
  micro: {
    name: "Microbiology",
    emoji: "🦠",
    enabled: true,
    papers: {
      paper1: {
        name: "Paper 1",
        enabled: true,
        chapters: {
          "general-microbiology": {
            name: "General Microbiology",
            emoji: "🔬",
            questions: [
              // ── History & pioneers ──
              {
                q: "All of the following are Koch's postulates EXCEPT:",
                options: [
                  "The bacterium should be constantly associated with the lesions of the disease caused by it",
                  "It should be possible to isolate the bacterium in pure culture from the lesions",
                  "Inoculation of such pure cultures into suitable laboratory animals should reproduce the disease",
                  "The bacterium need not be re-isolated from lesions produced in experimental animals"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which of the following organisms does not follow Koch's postulates?",
                options: ["Mycobacterium leprae", "Escherichia coli", "Klebsiella species", "Staphylococcus aureus"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Stanley B. Prusiner was awarded the Nobel prize for his discovery of:",
                options: ["Prions", "Cell-mediated immunity", "Smallpox vaccine", "Penicillin"],
                answer: 0,
                explanation: ""
              },
              {
                q: "The first scientist to have observed bacteria using a single lens microscope is",
                options: ["Edward Jenner", "Antonie van Leeuwenhoek", "Alexander Fleming", "Louis Pasteur"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Who is the father of antiseptic surgery?",
                options: ["Robert Koch", "Paul Ehrlich", "Joseph Lister", "Alexander Fleming"],
                answer: 2,
                explanation: ""
              },
              {
                q: "All of the following are contributions of Louis Pasteur EXCEPT:",
                options: [
                  "The introduction of sterilisation techniques",
                  "The discovery of the vaccine for hydrophobia",
                  "The introduction of antiseptic techniques in surgery",
                  "The discovery of the principles of fermentation"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "The smallpox vaccine was discovered by:",
                options: ["Edward Jenner", "Joseph Lister", "Niels Jerne", "Paul Ehrlich"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Who is credited with the discovery of the electron microscope?",
                options: ["Antonie V Leeuwenhoek", "Ernst Ruska", "Niels Jerne", "Frank Burnet"],
                answer: 1,
                explanation: ""
              },
              {
                q: "The first whole-genome sequence of a microbe was published in 1995. Which organism's genome was the first to be published in 1995?",
                options: ["H. influenzae", "Staphylococcus aureus", "Streptococcus pyogenes", "Escherichia coli"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which of the following bacteria was discovered by Robert Koch?",
                options: ["Mycobacterium leprae", "Vibrio cholerae", "Treponemes", "Clostridium tetani"],
                answer: 1,
                explanation: ""
              },

              // ── Microscopy ──
              {
                q: "Which microscope is based on the principle that differences in the refractive indices of bacterial cells and the surrounding medium make them clearly visible?",
                options: ["Dark-ground microscope", "Phase-contrast microscope", "Electron microscope", "Confocal microscope"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Resolving power of microscope depends upon",
                options: [
                  "Focal length and aperture of eye lens",
                  "Focal length and objective of eye lens",
                  "Aperture of objective and eye lens",
                  "Wave length of light illuminating the object"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "The resolving power of light microscope",
                options: ["2mm", "0.2mm", "0.1mm", "1mm"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the following microscopes is most useful for viewing the internal structures of an unstained specimen",
                options: ["Phase contrast", "Confocal", "Electron", "Any of the above"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which of the following is true regarding fluorescence microscope",
                options: [
                  "It uses light from a low intensity source to excite a fluorescent agent",
                  "It uses light from a high intensity source to excite a fluorescent agent",
                  "It can use both low as well as high intensity light",
                  "It is not of much use in microbiology"
                ],
                answer: 1,
                explanation: ""
              },

              // ── Bacterial cell structure & physiology ──
              {
                q: "All of the following statements are TRUE of the outer membrane layer of the gram-negative cell wall EXCEPT:",
                options: [
                  "It forms the outermost layer",
                  "It is responsible for endotoxic activities",
                  "It has receptors for some bacteriophages",
                  "Porins in this layer serve as diffusion channels for small molecules"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "Peritrichous arrangement of flagella refers to:",
                options: [
                  "A single flagellum at one pole",
                  "Flagella all around the cell",
                  "Flagella at both poles",
                  "Tufts of flagella at one pole"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "The organ of adhesion in bacteria is the:",
                options: ["Flagellum", "Fimbria", "Capsule", "Mesosome"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Bacteria that grow at temperatures below 20°C are called:",
                options: ["Mesophiles", "Thermophiles", "Psychrophiles", "Capnophiles"],
                answer: 2,
                explanation: ""
              },
              {
                q: "All the following statements are TRUE about L-forms of bacteria EXCEPT that they:",
                options: [
                  "Are aberrant morphological forms",
                  "Develop in the presence of penicillin",
                  "Are always stable",
                  "Are named after Lister Institute, London"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "All the following statements are TRUE about bacterial spores EXCEPT that:",
                options: [
                  "They are a method of reproduction",
                  "They are resistant to desiccation",
                  "They can be destroyed by autoclaving at 120°C for 15 minutes",
                  "They are produced by the genus Bacillus"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "In which phase of bacterial growth does sporulation occur?",
                options: ["Lag phase", "Log phase", "Stationary phase", "Phase of decline"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which of the following is an enrichment medium?",
                options: ["Nutrient broth", "Tetrathionate broth", "Stuart's medium", "Thayer-Martin medium"],
                answer: 1,
                explanation: ""
              },
              {
                q: "MacConkey agar is an example of:",
                options: ["Differential medium", "Transport medium", "Enriched medium", "Anaerobic medium"],
                answer: 0,
                explanation: ""
              },
              {
                q: "All the following are enriched media EXCEPT:",
                options: ["Loeffler's serum slope", "Blood agar", "Chocolate agar", "Nutrient agar"],
                answer: 3,
                explanation: ""
              },

              // ── Classification, pathogenesis & culture ──
              {
                q: "Phenotypic classification refers to classification based on:",
                options: [
                  "Direct analysis of genes in microbes",
                  "Chromosomal and extrachromosomal DNA analysis of microbes.",
                  "Expressed characteristics of microorganisms.",
                  "Nucleotide sequencing of microbes"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "Incubation period refers to the time duration",
                options: [
                  "Between entry of pathogen and exit of pathogen in body",
                  "Between entry of pathogen in vector and entry in host",
                  "Between entry of pathogen and manifestation of symptoms or signs in host",
                  "Between entry of pathogen and its detection in host"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which of the following is not a gram-positive coccus?",
                options: ["Pneumococcus", "Meningococcus", "Enterococcus", "Staphylococcus"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Microorganisms that fail to grow in the presence of as low as 0.03% O2 are called:",
                options: ["Aerotolerant", "Obligate anaerobes", "Facultative anaerobes", "Facultative aerobes"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Most enteric bacilli are motile. The one which is non-motile is:",
                options: ["Salmonella", "E. coli", "Klebsiella", "Proteus"],
                answer: 2,
                explanation: ""
              },
              {
                q: "The always pathogenic Enterobacteriaceae is:",
                options: ["E. coli", "Klebsiella", "Shigella", "Yersinia"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Serotyping or antigenic typing of E. coli is based on:",
                options: ["Somatic antigen O", "Flagellar antigen H", "Capsular antigen K", "All of these"],
                answer: 3,
                explanation: ""
              },
              {
                q: "The commonest culture media used for Leptospirais:",
                options: ["Korthof's", "Fletcher's", "Stuart's", "EMJH"],
                answer: [0, 3],
                explanation: ""
              },
              {
                q: "Which of the following is NOT a gram-positive bacillus?",
                options: ["Staphylococcus", "Corynebacterium", "Bacillus", "Clostridium"],
                answer: 0,
                explanation: ""
              },

              // ── Virology ──
              {
                q: "Which of the following virus is enveloped",
                options: ["Pox virus", "Herpes virus", "Adeno virus", "Parvovirus B19"],
                answer: 2,
                explanation: ""
              },
              {
                q: "The largest virus in size",
                options: ["Herpes simplex virus", "Hepatitis B virus", "Pox virus", "Adenovirus"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Smallest virus in size",
                options: ["Picornavirus", "Parvovirus", "Hepatitis D virus", "Adenovirus"],
                answer: 1,
                explanation: ""
              },
              {
                q: "All of the following are RNA viruses except",
                options: ["Adenovirus", "Enterovirus", "Coxackievirus", "Hepatitis A virus"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Subunit vaccine is used for",
                options: ["Hepatitis A", "Hepatitis B", "Japanese B Encephalitis", "Mumps"],
                answer: 1,
                explanation: ""
              },

              // ── Mycology ──
              {
                q: "The rigidity of fungal cell walls is due to presence of:",
                options: ["Protein", "Chitin", "Teichoic acid", "Lipopolysaccharide"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the following is a subcutaneous mycosis?",
                options: ["Favus", "Pityriasisversicolor", "Tineacapitis", "Chromomycosis"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which of the following is a superficial fungal infection?",
                options: ["Favus", "Pityriasisversicolor", "Tineacapitis", "Chromomycosis"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which one of the following fungi is NOT a mould?",
                options: ["Rhizopus", "Cryptococcus", "Aspergillus", "Penicillium"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the following is the morphological characteristic that refers to fungi imperfecti?",
                options: ["Lack of cell wall", "Lack of septate hyphae", "Unidentified sexual phases", "Unidentified microconidia"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which of the following is correct regarding Sabouraud dextrose agar?",
                options: [
                  "Yeast do not grow on this medium.",
                  "It has a high concentration of either glucose or maltose",
                  "The pH of the medium is high (8.4)",
                  "It is prepared n petri dishes"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "A fungus was isolated from a CSF specimen. It grew at 25°C and 37°C, showed only budding yeast cells and no pseudohyphae, chlamydospores or arthroconidia. It is an example for",
                options: ["Yeast", "Yeast like fungus", "Mold", "Dimorphic fungus"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which stain can be used to visualise fungi from culture?",
                options: ["Lactophenol cotton blue", "KOH", "ZN stain", "Methenamine silver stain"],
                answer: 0,
                explanation: ""
              },
              {
                q: "In a patient with brain abscess serum β-d-glucan assay was positive. This indicates that infection is caused by",
                options: ["Staphylococcus", "Aspergillus", "Mycobacterum", "Entamoebahistolytica"],
                answer: 1,
                explanation: ""
              },
              {
                q: "An elderly diabetic lady is admitted to the ICU for multi organ failure. Her blood culture bottles are flagged positive on second day. Gram stain of positive blood culture showed gram positive budding yeast cells. The test that can identify the organism most accurately and quickly is",
                options: ["PCR", "Automated identification method-Vitek", "Chromagar", "MALDITOF"],
                answer: 2,
                explanation: ""
              },

              // ── Parasitology ──
              {
                q: "A previously healthy lady presented with frequent watery stools for 2 days. Considering parasitic intestinal infection, useful investigations here would be all, EXCEPT",
                options: [
                  "Saline wet mount to demonstrate trophozoites",
                  "Saline wet mount to demonstrate larvae",
                  "Gram stain to demonstrate cysts",
                  "Modified acid fast stain to demonstrate oocysts"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "A 5 year old boy passed a worm in his stool. It was whitish measuring 15cm, had a cylindrical body and was motile. The organism is likely to be",
                options: ["protozoan parasite", "trematode", "cestode", "nematode"],
                answer: 3,
                explanation: ""
              },
              {
                q: "An organism that cannot exist without a host under any circumstance is known as:",
                options: ["Obligate parasite", "Facultative parasite", "Ectoparasite", "Endoparasite"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which statement is an accurate description of paratenic host?",
                options: [
                  "It is a host in which the adult stage of the parasite lives",
                  "A host that harbours the larval stage of the parasite",
                  "Host harbours the parasite and also acts as a source of infection",
                  "Host acts as a transport or carrier host as the parasite is unable to develop further in this host"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which of the following is a nematode?",
                options: ["Hymenolepisdiminuta", "Loa loa", "Fasciola hepatica", "Paragonimus"],
                answer: 1,
                explanation: ""
              },
              {
                q: "In which of the following worm does the infection occur by piercing of intact skin by filiform larval forms?",
                options: ["Ancylostomaduodenale", "Ascarislumbricoides", "Echinococcusgranulosus", "Trichinellaspiralis"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Vertical transmission is seen in",
                options: ["Toxoplasma gondii", "Trichomonasvaginalis", "Trichinellaspiralis", "None of the above"],
                answer: 0,
                explanation: ""
              },
              {
                q: "NIH swab is used for diagnosis of:",
                options: ["Pinworm", "Hookworm", "Whipworm", "Roundworm"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Modified acid-fast staining technique is used to visualise the oocyst of:",
                options: ["Cryptosporidium", "Cystoisospora", "Cyclospora", "All of the above"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Novy, Nicoll and McNeal (NNN) medium:",
                options: [
                  "Is used for the growth of Plasmodium species",
                  "It has one part of defibrinated rabbit blood and one part salt agar",
                  "It is poured in petri dishes",
                  "The promastigotes transform into amastigote forms within 4 weeks"
                ],
                answer: 1,
                explanation: ""
              },

              // ── Bacterial genetics & molecular techniques ──
              {
                q: "Transfer of DNA from one bacterium to another by a bacteriophage is called:",
                options: ["Conjugation", "Transduction", "Transformation", "Transposition"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the following is responsible for the transfer of drug resistance in bacteria?",
                options: ["Colicinogenic factor", "Resistance transfer factor", "F factor", "None of these"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Transfer of genetic information through free DNA is called:",
                options: ["Transformation", "Transduction", "Conjugation", "Lysogenic conversion"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Northern blotting is used for the analysis of:",
                options: ["DNA", "RNA", "Proteins", "All of these"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the following is NOT TRUE regarding bacterial plasmids?",
                options: [
                  "They are extrachromosomal",
                  "They are eliminated by treating with radiation",
                  "They cannot replicate independently",
                  "They are not essential for bacterial life"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "Jumping genes are:",
                options: ["Episomes", "Plasmids", "Transposons", "Transfer factor"],
                answer: 2,
                explanation: ""
              },
              {
                q: "The technique for identifying DNA fragments by DNA-DNA hybridisation is:",
                options: ["Northern blotting", "Southern blotting", "Eastern blotting", "Western blotting"],
                answer: 1,
                explanation: ""
              },
              {
                q: "The procedure of Southern blotting is:",
                options: [
                  "Fragmentation → gel electrophoresis → blotting → hybridisation",
                  "Gel electrophoresis → fragmentation → blotting → hybridisation",
                  "Fragmentation → gel electrophoresis → hybridisation → blotting",
                  "Fragmentation → blotting → gel electrophoresis → hybridization"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "Identify the correct sequence of steps involved in polymerase chain reaction (PCR):",
                options: [
                  "Extraction, denaturation, annealing, extension",
                  "Denaturation, extraction, annealing, extension",
                  "Extension, annealing, denaturation, extraction",
                  "Annealing, extraction, denaturation, extension"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "PCR in which a second set of specific primers is used is:",
                options: ["Nested PCR", "Hot-start PCR", "High-fidelity PCR", "Arbitrary primed PCR"],
                answer: 0,
                explanation: ""
              },

              // ── Immunity & host defence ──
              {
                q: "Which of the following statements is TRUE regarding passive immunity?",
                options: [
                  "Confers immediate immunity",
                  "Host immune system takes part",
                  "Negative phase occurs",
                  "Induced by infection"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "All the following statements are TRUE regarding the functions of the thymus EXCEPT:",
                options: [
                  "The thymus produces thymic lymphocytes",
                  "The thymus reaches its maximal relative size just before birth",
                  "The thymus functions best after puberty",
                  "The thymus is the main site of lymphocyte proliferation"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "Toll-like receptors (TLRs) are:",
                options: [
                  "Transmembrane receptors present on macrophages and dendritic cells",
                  "Present on the surface of phagocytes to bind to mannose-rich glycans",
                  "Nucleotide-binding oligomerisation domain like receptors to recognise intracellular bacterial cell products",
                  "Molecules that bind to the surface of microbes"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which is not a macrophage?",
                options: ["Monocyte", "Microglia", "Kupffer cells", "Lymphocytes"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Defective phagocytosis results in the following condition:",
                options: [
                  "Chronic granulomatous disease",
                  "DiGeorge syndrome",
                  "Chediak–Higashi syndrome",
                  "Common variable immunodeficiency"
                ],
                answer: 2,
                explanation: ""
              }
            ]
          },
          "immunology": {
            name: "Immunology",
            emoji: "🛡️",
            questions: [
              // ── Antigens & haptens ──
              {
                q: "All the following statements are TRUE regarding haptens EXCEPT:",
                options: [
                  "They require additional carrier proteins",
                  "Simple haptens have only one antibody binding site",
                  "Complex haptens are non-precipitating",
                  "Simple haptens can inhibit precipitation"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "Conformational epitope is:",
                options: [
                  "A product of a linear peptide sequence",
                  "Produced by different sites of the peptide chain",
                  "Recognised by T cells",
                  "Also called sequential epitope"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the following is most immunogenic?",
                options: ["Proteins", "Lipids", "Polysaccharides", "Monosaccharides"],
                answer: 0,
                explanation: ""
              },
              {
                q: "The main aim of an adjuvant is to increase:",
                options: ["Distribution", "Absorption", "Antigenicity", "Metabolism."],
                answer: 2,
                explanation: ""
              },
              {
                q: "Isospecificity depends on:",
                options: [
                  "Antigens present in some members of the same species",
                  "Antigens present in all members of the same species",
                  "Closely related antigens in biologically different species",
                  "Self-antigens that are not ordinarily antigenic"
                ],
                answer: 0,
                explanation: ""
              },

              // ── Immunoglobulins ──
              {
                q: "A single Ig molecule contains:",
                options: [
                  "1 light chain, 1 heavy chain",
                  "2 light chains, 1 heavy chain",
                  "2 light chains, 2 heavy chains",
                  "1 light chain, 2 heavy chains"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "The earliest immunoglobulin synthesised by the fetus is:",
                options: ["IgG", "IgA", "IgE", "IgM"],
                answer: 3,
                explanation: ""
              },
              {
                q: "The antigen combining site present on the antibody molecule is called:",
                options: ["Epitope", "Paratope", "Hapten", "Carrier protein"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the Igs is normally transported across the placenta?",
                options: ["IgA", "IgM", "IgG", "IgE"],
                answer: 2,
                explanation: ""
              },
              {
                q: "All the following statements are TRUE regarding IgA EXCEPT:",
                options: [
                  "Has a monomeric structure",
                  "Molecular weight is 400,000 kDa",
                  "Glycopeptide bond",
                  "Protects against poliovirus"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which Ig class is involved in type I hypersensitivity?",
                options: ["IgA", "IgE", "IgM", "IgG"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which Ig class has the maximum intravascular distribution?",
                options: ["IgA", "IgG", "IgE", "IgM"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which of the following Igs is heat-labile?",
                options: ["IgA", "IgE", "IgD", "IgM"],
                answer: 1,
                explanation: ""
              },
              {
                q: "B cell receptors are constituted by:",
                options: ["IgG and IgM", "IgE and IgM", "IgD and IgG", "IgM and IgD"],
                answer: 3,
                explanation: ""
              },

              // ── Antigen–antibody reactions ──
              {
                q: "All the following forces are involved in antigen–antibody reactions EXCEPT:",
                options: ["Van der Waals forces", "Electrostatic bond", "Hydrogen bond", "Covalent bond"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Avidity is highest in:",
                options: ["IgA", "IgM", "IgG", "IgE"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Prozone phenomenon is due to:",
                options: ["Antigen excess", "Antibody excess", "Both antigen and antibody excess", "None of these"],
                answer: 1,
                explanation: ""
              },
              {
                q: "All the following are TRUE about precipitation reactions EXCEPT:",
                options: [
                  "Reaction of soluble antigen with antibody",
                  "Very sensitive for the detection of antigens",
                  "Elek test is an example",
                  "Coombs test is an example"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "A 25-year-old man with a history of multiple sexual partners is admitted with unexplained fever, loss of weight and persistent diarrhea for the past 6 months. His blood is drawn after counselling to detect antibody against HIV. The laboratory will test using ELISA. Which of the following statements is true regarding ELISA?",
                options: [
                  "It uses horseradish peroxidase as the substrate",
                  "It is performed in a microtiter plate having 46 wells",
                  "Direct ELISA is used for detecting antibody in test serum",
                  "Indirect ELISA can be used to detect both antigen and antibody in serum"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "Rose-Waaler test is an example of:",
                options: [
                  "Latex agglutination test",
                  "Reversed passive agglutination",
                  "Passive hemagglutination",
                  "Co-agglutination test."
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "Chemiluminescence refers to a clinical reaction emitting energy in the form of:",
                options: ["Electric current", "Chemical reaction", "Photons", "Ionising radiation"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Widal test is a type of:",
                options: [
                  "Precipitation reaction",
                  "Agglutination reaction",
                  "Neutralisation test",
                  "Complement fixation test"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the following is the correct flow diagram to depict the principle of ELISA?",
                options: [
                  "Ag-Ab complex-enzyme + substrate-----> activates chromogen -----> colour change ----> detection by spectrophotometry",
                  "Ag-Ab + substrate ----> activates enzyme-chromogen -----> colour change ----> detection by spectrophotometry",
                  "Ag-Ab complex-substrate -----> activates enzyme ----> add chromogen -----> colour change ----> detection by spectrophotometry",
                  "Ag-Ab complex-enzyme -----> activates chromogen -----> colour change ----> detection by spectrophotometry"
                ],
                answer: 0,
                explanation: ""
              },

              // ── Complement ──
              {
                q: "All the statements are TRUE regarding classical pathway EXCEPT:",
                options: [
                  "Activated by antigen-antibody complex",
                  "Calcium ions are required for activation",
                  "C3 convertase has C4b2b",
                  "C5 convertase has C4b2a3b"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "Individuals are more prone to gonococcal infection if there is a deficiency of:",
                options: ["C1 inhibitor", "C1 and C2", "C5-C8", "C3b inactivator"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which of the following is an activator of the alternate pathway?",
                options: ["DNA", "C-reactive protein", "Bacterial endotoxins", "Trypsin-like enzymes"],
                answer: 2,
                explanation: ""
              },
              {
                q: "In the alternate pathway, C3 pro-activator is:",
                options: ["Factor D", "Factor 1", "Factor H", "Factor B"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Biosynthesis of complements takes place at the following sites in the body EXCEPT:",
                options: ["Macrophages", "Spleen", "Liver", "Bone marrow"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which among the following is not a function of complement?",
                options: ["Phagocytosis", "Inflammatory response", "Antigen presentation", "Immune clearance"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which of the following acts as an inhibitor of complement?",
                options: ["Factor P", "Factor H", "C4 binding protein", "Anaphylatoxininactivator"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Collagen vascular diseases are associated with the deficiency of:",
                options: ["C1,C2,C3", "C1, C2, C4", "C1,C5,C8", "C2, C3, C4"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A 7-year-old boy presents with disseminated Neisseria infection. His other parameters are normal but the pediatrician suspects complement deficiency. Such infection is commonly associated with deficiency of:",
                options: ["Properdin", "Factor D", "C1 inhibitory deficiency", "Membrane attack complex"],
                answer: 3,
                explanation: ""
              },
              {
                q: "The membrane attack complex consists of:",
                options: ["Colicins", "C3b3b,Bb", "C5b,6,7,8,9", "Properdin"],
                answer: 2,
                explanation: ""
              },

              // ── Immune response & cytokines ──
              {
                q: "Which of the following is the function of antibody-mediated immunity?",
                options: [
                  "Immunological surveillance",
                  "Graft-versus-host reaction",
                  "Protection against fungi",
                  "Extracellular bacterial pathogens"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which among the following is TRUE of primary immune response?",
                options: [
                  "It is carried out by memory B cells",
                  "The predominant antibody is IgG",
                  "Peak response is in 3–5 days",
                  "A high dose of antigen is required"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which of the following statements is TRUE for optimal antibody production?",
                options: [
                  "Large particulate antigens should be administered in tissues",
                  "IgA production is better when antigens are administered parentally",
                  "Antibody production increases with increase in dosage",
                  "Simultaneous administration of multiple antigens has no effect"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "IL-1 produces:",
                options: [
                  "T lymphocyte activation",
                  "Delayed wound healing",
                  "Increased pain perception",
                  "Decreased PMN release from the bone marrow"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "IL-4 is primarily produced by:",
                options: ["Macrophages", "B cells", "T cells", "Fibroblasts"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which of the following is a pro-inflammatory marker?",
                options: ["IL-4", "IL-9", "IL-11", "IL-17"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which of the following is an important endogenous pyrogen?",
                options: ["IL-1", "IL-2", "IL-3", "IL-4"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Cytokines are:",
                options: [
                  "Hormone-like substances, that are active even at minute concentrations",
                  "They are produced by endocrine glands",
                  "Regulated by exogenous stimuli such as antigens only",
                  "They act on the cells away from those producing them"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which of the following is true regarding cell-mediated immunity?",
                options: [
                  "It is involved in type 1 hypersensitivity",
                  "It has a minimal role in early rejection in a pre-exposed person",
                  "It plays a role in the classical pathway of complement activation",
                  "It plays a major role in homograft rejection and graft-versus-host reaction"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "Interferon gamma, a type of cytokine, has the following function:",
                options: [
                  "It activates B cells to produce IgG",
                  "It has antiviral activity",
                  "It is used in the treatment of leukemia",
                  "It is secreted by macrophages"
                ],
                answer: 0,
                explanation: ""
              },

              // ── Hypersensitivity ──
              {
                q: "All the following are important steps in the mechanism of anaphylaxis EXCEPT:",
                options: [
                  "Activation by the allergen-specific Th2 cells",
                  "Secretion of IgE by plasma cells",
                  "Crosslinking of the cell-bound IgE",
                  "Activation of complements"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "RAST is used to detect:",
                options: [
                  "Type 1 hypersensitivity",
                  "Type II hypersensitivity",
                  "Type III hypersensitivity",
                  "Type IV hypersensitivity"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which of the following is NOT a primary mediator of anaphylaxis?",
                options: ["5-HT", "Leukotrienes", "Platelet activating factor", "Heparin"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Delayed hypersensitivity can be transferred by:",
                options: ["Lymphocytes", "Neutrophils", "Macrophages", "Eosinophils"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Tuberculin test is which type of hypersensitivity reaction?",
                options: ["IgE type", "Cytolytic and cytotoxic type", "Immune complex", "Delayed type"],
                answer: 3,
                explanation: ""
              },
              {
                q: "One type of immune complex-mediated hypersensitivity is:",
                options: [
                  "Arthus reaction",
                  "Schwartzman reaction",
                  "Schultz–Dale phenomenon",
                  "Passive cutaneous anaphylaxis"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which among the following is a reagin-dependent hypersensitivity?",
                options: ["Type I", "Type II", "Type III", "Type IV"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A 5-year-old girl presents with complaints of a recurrent history of breathlessness and wheezing. Detailed history reveals similar episodes in the past few years usually around February and March. A clinical diagnosis of bronchial asthma is made. What type of hypersensitivity reaction is bronchial asthma?",
                options: ["Type I", "Type II", "Type III", "Type IV"],
                answer: 0,
                explanation: ""
              },

              // ── Immunodeficiency ──
              {
                q: "All the following are features of Bruton's disease EXCEPT:",
                options: [
                  "The disease is evident after six months of life",
                  "Tonsils and adenoids are atrophic",
                  "Live vaccines should not be given",
                  "Patient presents with recurrent viral infections"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which of the following options is FALSE about late-onset hypogammaglobulinemia?",
                options: [
                  "Disease manifests after 15 years of age",
                  "Low level of total immunoglobulin",
                  "Recurrent bacterial infections",
                  "Also known as selective immunoglobulin immunodeficiency"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which selective immunoglobulin deficiency is associated with steatorrhea?",
                options: ["IgA deficiency", "IgG deficiency", "IgM deficiency", "IgD deficiency"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which of the following diseases is NOT a severe combined immunodeficiency?",
                options: [
                  "Wiskott–Aldrich syndrome",
                  "Job syndrome",
                  "Ataxia telangiectasia",
                  "Adenosine deaminase (ADA) deficiency"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "All the following are features of Wiskott–Aldrich syndrome EXCEPT:",
                options: [
                  "Raised serum IgM",
                  "Absence of isohemagglutinins",
                  "Serum IgG levels are normal",
                  "Serum IgE levels are raised"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which is found is DiGeorge syndrome?",
                options: ["Tetany", "Eczema", "Absent B and T cells", "Total absence of T cells"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Hereditary angioneurotic edema is due to the deficiency of:",
                options: ["C1", "C8", "C1 inhibitor", "C3 convertase"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A child presents with frequent sinopulmonary infection and telangiectasia of the face. Deficiency of which of the following immunoglobulin class should be investigated?",
                options: ["IgM", "IgG1", "IgG3", "IgA"],
                answer: 3,
                explanation: ""
              },
              {
                q: "In lazy leucocyte syndrome:",
                options: [
                  "There is a defect in neutrophil mobility",
                  "There is peripheral leucopenia",
                  "Both (a) and (b) are true",
                  "Both (a) and (b) are false"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "Chronic granulomatous disease is a:",
                options: ["B cell defect", "T cell defect", "Complement defect", "Disorder of phagocytosis"],
                answer: 3,
                explanation: ""
              },

              // ── Transplantation immunology ──
              {
                q: "Heterotopic graft refers to:",
                options: [
                  "Graft placed in an anatomically normal site",
                  "Graft placed in an anatomically abnormal site",
                  "Graft which acts as scaffolding",
                  "Graft from a cadaver"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "Graft between two genetically non-identical members of the same species is called:",
                options: ["Autograft", "Isograft", "Allograft", "Xenograft"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Hyperacute rejection is due to:",
                options: ["Pre-formed antibodies", "Lymphokines", "In situ antibody formation", "All of these"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Immunological enhancement results in:",
                options: [
                  "Resistance to infections",
                  "Hyperacute graft rejection",
                  "Slowing down of graft rejection",
                  "Enhanced functioning of thymus"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "In transplant reaction:",
                options: [
                  "White graft response is due to delayed rejection",
                  "Chronic graft rejection responds well to corticosteroids",
                  "Acute rejection occurs within 10 days of transplant",
                  "All of these"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "Runt disease is:",
                options: [
                  "Graft rejection",
                  "Graft-versus-host reaction",
                  "Deficient T cell function",
                  "Complement deficiency"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "All the following are used as immunosuppressive agents EXCEPT:",
                options: ["Azathioprine", "Methotrexate", "Levamisole", "Cyclophosphamide"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Antigens that participate in graft rejection are called:",
                options: ["Histocompatibility antigens", "Alloantigens", "Heterologous antigens", "Haptens"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Acute graft rejection is characterised by:",
                options: [
                  "Rejection of graft within hours of implantation",
                  "Appearance of \"White graft response\"",
                  "Damage which occurs due to preformed anti-donor antibodies",
                  "Accumulation of lymphocytes, plasma cells, macrophages and neutrophils, leading to endothelial damage"
                ],
                answer: [1, 3],
                explanation: ""
              }
            ]
          },
          "cvs-blood": {
            name: "CVS & Blood",
            emoji: "🫀",
            questions: [
              // ── Infective endocarditis & bacteremia ──
              {
                q: "A lady presented with fever with chills, splenomegaly, petechiae, and murmur. Echocardiography confirmed mitral regurgitation and nodular lesions on valvular leaflets. Probable clinical condition is:",
                options: ["Endocarditis", "Myocarditis", "Pericarditis", "Pancarditis"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A lady with a past history of rheumatic fever had fever with chills for 3 weeks and gradually developed splenomegaly, clubbing, petechiae, neurologic manifestations, and weight loss. Echocardiography showed an oscillating intracardiac mass. The probable causative agent is:",
                options: ["Streptococcus pyogenes", "Viridans streptococci", "Staphylococcus aureus", "Streptococcus pneumonia"],
                answer: 1,
                explanation: ""
              },
              {
                q: "From blood of a subacute bacterial endocarditis patient gram-negative bacilli was isolated. It was slow growing, fastidious, grew better with CO2 and formed pitting colonies. The probable organism is:",
                options: ["Eikenella corrodens", "Pseudomonas species", "Haemophilus influenza", "Diphtheroids"],
                answer: 0,
                explanation: ""
              },
              {
                q: "All of the following are true about acute bacterial endocarditis, EXCEPT:",
                options: [
                  "Involves normal cardiac valve",
                  "Caused by organism of low virulence",
                  "Substantial morbidity and mortality even with the appropriate antibiotic therapy and / or surgery",
                  "Less common type of endocarditis."
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "Subacute bacterial endocarditis is commonly caused by:",
                options: ["Streptococcus pyogenes", "Streptococcus viridans group", "Staphylococcus aureus", "Streptococcus pneumonia"],
                answer: 1,
                explanation: ""
              },
              {
                q: "ALL of the following are the typical organism cauing infective endocarditis, EXCEPT:",
                options: ["Viridans streptococci", "HACEK group", "Staphylococcus aureus", "Escherichia coli"],
                answer: 3,
                explanation: ""
              },
              {
                q: "ALL the following are the major criteria in modified duke criteria for the diagnosis of infective endocarditis, EXCEPT:",
                options: [
                  "Typical IE organism isolated from two separate blood cultures",
                  "Persistently positive blood culture with agents other than typical IE organisms in blood culture sets drawn >12 h apart",
                  "Persistently positive blood culture with agents other than typical IE organisms in all of 3 sets, with first and last drawn at least 1 h apart",
                  "Positive blood culture for Coagulase negative staphylococcus isolated from single blood culture bottle",
                  "Single positive blood culture for Coxiella burnetii or phase I IgG antibody titer of >1:800"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which of the following is the most common cause of native valve infective endocarditis?",
                options: ["Staphylococcus aureus", "Coagulase negative Staphylococcus", "Viridans streptococci", "Streptococcus pyogenes"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which of the following is the most common cause of community acquired native valve infective endocarditis?",
                options: ["Staphylococcus aureus", "Coagulase negative Staphylococcus", "Viridans streptococci", "Streptococcus Pyogenes"],
                answer: 2,
                explanation: ""
              },
              {
                q: "The commonest cause of prosthetic valve endocarditis is:",
                options: ["Staphylococcus aureus", "Coagulase negative Staphylococcus", "Viridans streptococci", "Enterococcus"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A Middle aged man presented with fever and anemia. Laboratory tests showed evidence of haemolysis. The probable cause can be.",
                options: ["HIV", "Hepatitis C Virus", "Malaria", "Schistomiasis"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A lady underwent septic abortion. She receiving piperacillin tazobactam thrice daily IV since 2 days. Since she is febrile and he BP is low, blood culture is being planned. Best way to collect is:",
                options: [
                  "Just after the antimicrobial agent aministered.",
                  "After the completion of antibiotic course.",
                  "Just before the next dose of antimicrobial agent.",
                  "To stop antibiotics for 24 hours and then collect."
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "An adult patient is advised blood culture. You are monitoring the collection of a blood sample by a newly appointed technician. among the following steps performed by the tecnihcian, which one would you consider inappropriate and correct the technician?",
                options: [
                  "70% isopropyl and povidone iodine for decontamination",
                  "5 cm area decontaminated with circular motions feom center to periphery",
                  "sample is injected into culture bottle immediately after collection",
                  "4 mL of blood sample is collected"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "Pathogenic organisms are released into the bloodstream at a fairly constant rate in all of the following conditions, EXCPECT:",
                options: ["Septic shock", "Rheumatic fever", "Acute endocarditis", "During the early stage of enteric fever"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Most cases of clinically significant bacteremia are of extravascular origin. Which of the following is the most common portal of entry for bacteremia?",
                options: ["Genitourinary tract", "Respiratory tract", "Abscesses", "Surgical wound infections"],
                answer: 0,
                explanation: ""
              },
              {
                q: "The primary mechanism of septicemic shock in Escherichia coli infection is:",
                options: ["Bacterial Invasion", "Endotoxin", "Exotoxins", "Bacterial enzymes"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Antiseptic to be used for decontamination of skin before collecting blood for culture is:",
                options: ["70% isopropyl alcohol and chlorhexidine", "70% isopropyl alcohol", "Chlorhexidine", "Povidone – iodine"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Volume of blood to be collected for adults for culture is:",
                options: ["3-5 mL", "5-6 mL", "8-10 mL", "10-15 mL"],
                answer: 2,
                explanation: ""
              },
              {
                q: "All are true regarding collecting blood for culture, EXCEPT:",
                options: [
                  "Inoculated broth bottles to be stored in refrigerator if 2-4 hours delay is expected.",
                  "2-3 blood culture sets are ideal",
                  "Each set comprises of an aerobic and an anaerobic broth bottle",
                  "Collected blood is directly inoculated at bedside into the blood culture bottle"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "All the following are examples of automated blood culture system, EXCEPT:",
                options: ["BACTEC", "BacT/ALERT", "VIRTUO", "VITEK"],
                answer: 3,
                explanation: ""
              },

              // ── Enteric fever / Salmonella ──
              {
                q: "A patient develops fever which rises gradually to a higher level with every spike; then falls down, but does not touch normal. The probable diagnosis is:",
                options: ["Leptospirosis", "Dengue", "Typhoid fever", "Brucellosis"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A girl aged 11 years is admitted with fever with chills, abdominal pain. Hepatosplenomegaly and relative bradycardia since 5 days. Investigation useful is:",
                options: ["Widal test", "Blood culture", "Urine culture", "Vi antibody detection"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A girl aged 6 years with stepladder fever, vomiting, and hepatosplenomegaly has been on antibiotics for 5 days. Blood culture yielded no growth as on the 3rd day of incubation. Next best investigation to rule out enteric fever is.",
                options: ["stool culture", "Bone marrow culture", "Urine culture", "Culture from rose spots"],
                answer: 1,
                explanation: ""
              },
              {
                q: "In a child with fever and splenomegaly for 5 days, Widal test showed raised Salmonella Typhi \"O\" antibodies (Titer 80) and Salmonella Paratyphi \"AH\" antibodies (Titer 80). Best next course of action is:",
                options: [
                  "Rules out typhoid as titers are insignificant",
                  "Repeat the Widal test immediately to rule out technical error.",
                  "Perform blood culture now and repeat the Widal test after one week",
                  "Treat as confirmed typhoid"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "Following are true about Vi antibodies, EXCEPT:",
                options: [
                  "Titers are low hence not used in Widal test",
                  "Absence in proven typhoid case indicates poor prognosis",
                  "Used in vaccine",
                  "Persistence after convalescence indicates good prognosis"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "Antibodies against which of the following antigen appear early following infection with Salmonella Typhi?",
                options: ["Vi antigen", "O antigen", "H antigen", "Capsular antigen"],
                answer: 1,
                explanation: ""
              },
              {
                q: "All are true about Salmonella Typhi \"H\" antigen, EXCEPT:",
                options: [
                  "It confers motility to the bacteria",
                  "Less immunogenic than \"O\" antigen",
                  "H antibody appears late, disappears late: Indicates convalescent stage",
                  "Serogroups are differentiated into serotypes based on H antigen"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "Vi antigen is expressed by all of the following, EXCEPT:",
                options: [
                  "Salmonella Typhi",
                  "Salmonella Paratyphi A",
                  "Salmonella Dublin",
                  "Citrobacter freundii (the Ballerup – Bethesda group)"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "Salmonella Typhi is the causative agent of typhoid fever. The infective does of S.Typhi:",
                options: ["One bacillus", "10³ -10⁶ bacilli", "10⁹-10¹⁰ bacilli", "1-10 bacilli"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Salmonella Typhi enters into GIT through:",
                options: [
                  "Intra epithelial lymphocytes",
                  "Columnar epithelial cells lining GI mucosa",
                  "M cells",
                  "Mucosa associated lymphoid tissue"
                ],
                answer: 2,
                explanation: ""
              },

              // ── Rickettsia, typhus & Bartonella ──
              {
                q: "Several inmates of a prison had developed fever, sever myalgia, non-itchy rash which first appeared on trunk and later involved the entire body except for face, palms and soles. On inquiry, he gave a history of being exposed to louse in last week. The probable diagnosis is:",
                options: ["Measles", "Epidemic typhus", "Endemic typhus", "Typhoid"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Several inmates of a prison had developed fever, severe myalgia, and a non – itchy rash that first appeared on the trunk and later involved the entire body except for the face, palms, and soles. Laboratory diagnosis of this clinical condition is done by:",
                options: ["Blood culture", "Weil – Felix test", "Paul Bunnel test", "Widal test"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Several inmates of a prison had developed fever, severe myalgia, and a non-itchy rash which first appeared on the trunk and later involved the entire body except for the face, palms, and soles. He had a history of exposure to an insect one week ago. The treatment of choice for this clinical condition is:",
                options: ["Chloramphenicol", "Ceftriaxone", "Doxycycline", "Ciprofloxacin"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A person has developed fever, headache, myalgia, anorexia, and rash (involving the trunk more often than the extremities). The Weil-Felix test was negative. He had a history of exposure to an insect one week ago. The probable diagnosis is:",
                options: ["Epidemic typhus", "Endemic typhus", "Scrub typhus", "Indian tick typhus"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A lady from a village near the Western Ghats presented with fever, myalgia, and diarrhea for 4 days. Later, she developed maculopapular rash. Upon examination, the cervical and axillary lymph nodes were enlarged, and an eschar was visible on the left forearm. The clinical condition is:",
                options: ["Epidemic typhus", "Endemic typhus", "Scrub typhus", "Indian tick typhus"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Bacillary angiomatosis is an angioproliferative disorder characterized by neovascular lesions involving skin and other organs. Which of the following is the causative agent of this clinical condition?",
                options: ["Bartonella henselae", "Bartonella Quintana", "Bartonella bacilliformis", "Both a and b"],
                answer: 3,
                explanation: ""
              },
              {
                q: "All of the following rickettsiae belong to spotted fever group, EXCEPT:",
                options: ["Rickettsia rickettsii", "Rickettsia conorii", "Rickettsia typhi", "Rickettsia akari"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Tick is the vector for following rickettsial infections, EXCEPT:",
                options: ["Rickettsia rickettsii", "Rickettsia akari", "Rickettsia africae", "Rickettsia conorii"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the following is the causative agent of Oroya fever or Carrion's disease?",
                options: ["Bartonella henselae", "Bartonella quintana", "Bartonella bacilliformis", "Rickettsia akari"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which of the following is the causative agent of this Verruga peruana?",
                options: ["Bartonella henselae", "Bartonella quintana", "Bartonella bacilliformis", "Rickettsia akari"],
                answer: 2,
                explanation: ""
              },

              // ── Brucella, Leptospira & Borrelia ──
              {
                q: "In a suspected case of brucellosis who has been administered with antibiotics for 2 days, the best clinical specimen that can be used for culture is:",
                options: ["Blood", "Bone marrow", "CSF", "Joint aspirate"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A butcher presents with 2 weeks history of undulating fever, profuse night sweats and pain abdomen. On examination hepatosplenomegaly was noticed. Blood culture was positive after 10 days and the isolated organism was rapid urease positive. Probable clinical diagnosis is:",
                options: ["Malaria", "Brucellosis", "Leptospirosis", "Enteric fever"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A veterinary surgeon presents with 2-week history of undulating fever, profuse night sweats, and abdominal pain. On examination, hepatosplenomegaly was noticed. Blood culture was positive after 10 days and the isolated organism was rapid urease positive. The most useful serological test in this case is:",
                options: ["Microscopic agglutination test", "Standard agglutination test", "Weil-Felix test", "Paul Bunnell test"],
                answer: 1,
                explanation: ""
              },
              {
                q: "An organism demonstrated in blood sample of a febrile patient was measuring 6-20 um in length and possessed numerous, tightly coiled spirals with hooked ends. The probable organism is:",
                options: ["Treponema pallidum", "Leptospira interrogans", "Borrelia recurrentis", "Borrelia burgdorferi"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A farmer working in paddy fields has fever, malaise since 10 days. Later he developed conjunctival suffusion, hepatosplenomegaly and mild icterus. Has raised urea and creatinine in blood. This clinical picture is suggestive of:",
                options: ["Viral hepatitis", "Leptospirosis", "Brucellosis", "Kala azar"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A man with a recent visit to a forest area develops an annu erythematous skin lesion on his right leg. Later deve fever, malaise, joint pains, and rashes. The Giemsa-stal blood smear shows thin spiral bacilli. The most probable organism is:",
                options: ["Treponema pallidum", "Leptospira interrogans", "Borrelia recurrentis", "Borrelial burgdorferi"],
                answer: 3,
                explanation: ""
              },
              {
                q: "A man with recent visit to a forest area develops an annu. erythematous skin lesion on his right leg. Later deve fever, malaise, joint pains and rashes. The Giemsa-stain blood smear is shown in the following picture. The most probable organism is:",
                options: ["Lyme disease", "Weil disease", "Secondary syphilis", "Relapsing fever"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which of the following is incorrect combination of Brucella species and zoonotic source?",
                options: ["B. melitensis-sheep, goat", "B.suis—pigs", "B.abortus-cat", "B. canis-dogs"],
                answer: 2,
                explanation: ""
              },
              {
                q: "The most common mode of transmission of Brucella is:",
                options: ["Eating or drinking unpasteurized/raw dairy products", "Air-borne", "Vector borne", "Man to man"],
                answer: 0,
                explanation: ""
              },
              {
                q: "The classical clinical triad of brucellosis include all, EXCEPT:",
                options: ["Fever", "Arthralgia", "Hepatosplenomegaly", "Maculopapular rash"],
                answer: 3,
                explanation: ""
              },
              {
                q: "In a suspected case of brucellosis, standard agglutination test is positive and standard agglutination test with 2-mercaptoethanol was negative. That indicates:",
                options: ["Acute infection", "Cured status", "Chronic infection", "Convalescence stage"],
                answer: 0,
                explanation: ""
              },

              // ── HIV & NACO strategies ──
              {
                q: "Telangana was a new state officially formed in the year 2014. The state Government wanted to know the seroprevalence of HIV in the state. Which of the following NACO strategy should be used for this purpose?",
                options: ["Strategy I", "Strategy IIA", "Strategy IIB", "Strategy III"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A 25-year-old male with history of multiple sex partners is admitted with complaints of unexplained fever, progressive loss of weight, persistent diarrhea and generalized lymphadenopathy for the past 6 months. Which of the following NACO strategy should be used for laboratory diagnosis of HIV/AIDS in this patient?",
                options: ["Strategy 1", "Strategy IA", "Strategy IIB", "Strategy III"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A surgeon wants to know the HIV status of a patient before a planned surgery for hernia. Which of the following NACO strategy should be used for this purpose?",
                options: ["Strategy I", "Strategy IIA", "Strategy IIB", "Strategy III"],
                answer: 3,
                explanation: ""
              },
              {
                q: "A marriage couple wants to know each other's HIV status before their wedding. Which of the following NACO strategy should be used for this purpose?",
                options: ["Strategy I", "Strategy IIA", "Strategy IIB", "Strategy III"],
                answer: 3,
                explanation: ""
              },
              {
                q: "A healthcare worker with exposure to a sharp used for known HIV reactive patient was started on postexposure prophylaxis 48 hours after the exposure. The best test suggested to detect the possibility of transmission at the earliest",
                options: ["Antibody detection by ELISA", "P24 antigen", "RNA PCR", "Western Blot"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A man with AIDS indicator diseases was tested for Hi for the first time. ELISA was reactive for HIV-I, and immunochromatography-based test was non-reactive. Be course of action to resolve the discrepancy as per the NACO guidelines is:",
                options: [
                  "Consider reactive, as ELISA is more specific",
                  "Considered as nonreactive, immunochromatography much sensitive",
                  "Retest after 6 months",
                  "Do a third test with having different principle or a different antigen"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "A young woman donated blood in a blood bank. Duri routine mandatory screening of the donated blood ELISA showed reactive for HIV-1. Appropriate course, action is:",
                options: [
                  "Discard the blood bag",
                  "Repeat the ELISA test with different antigen",
                  "Perform RNA PCR",
                  "Perform immunochromatography-based test"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which of the following modes has the highest risk of transmission of HIV:",
                options: ["Blood transfusion", "Homosexual", "Heterosexual", "Needle/syringe", "Mother to fetus"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Most common mode of transmission of HIV:",
                options: ["Blood transfusion", "Homosexual", "Heterosexual", "Mother to fetus", "Needle/syringe"],
                answer: 2,
                explanation: ""
              },
              {
                q: "The risk of transmission of HIV through sexual route per coitus is:",
                options: ["0.1-1%", "1-5%", "5-10%", "15-20%"],
                answer: 0,
                explanation: ""
              },

              // ── Arboviruses & viral hemorrhagic fevers ──
              {
                q: "A man from a village near Shimoga, Karnataka, presented with acute high fever with malaise and frontal headaches, followed by hemorrhagic symptoms. He has a recent history of visiting the nearest forest to collect honey. Probable clinical condition is:",
                options: ["Kyasanur forest disease", "Dengue hemorrhagic fever", "Ebola", "Chikungunya"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A man presented with fever, pain in multiple joints, and a Brownie nose appearance (characterized by hyperpigmentation over the centrofacial area). Probable diagnosis is:",
                options: ["Dengue", "Ebola virus disease", "Chikungunya", "Kyasanur Forest"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Viral hemorrhagic fevers (VHF) are caused by all of us following viruses, EXCEPT:",
                options: ["Dengue virus", "Yellow fever virus", "Ebola virus", "Zika virus"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Common characters of arboviruses include all, EXCEPT:",
                options: [
                  "Enveloped RNA viruses",
                  "Infected humans are the primary reservoirs",
                  "Geographically restricted",
                  "Biologically transmitted by insect vectors"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "Arboviruses transmitted by bite of Aedes aegypti include all, EXCEPT:",
                options: ["Japanese B encephalitis virus", "Dengue virus", "Yellow fever virus", "Zika virus"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Hemorrhagic fever is caused by:",
                options: ["Yellow fever virus", "Zika virus", "Chandipura virus", "Ganjam virus"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Kyasanur Forest disease virus is transmitted by:",
                options: ["Mite", "Louse", "Hard tick", "Soft tick"],
                answer: 2,
                explanation: ""
              },
              {
                q: "In dengue hemorrhagic fever, the minimum number of petechial spots per square inch area in cubital fossa is:",
                options: [">5", ">10", ">15", ">20"],
                answer: 3,
                explanation: ""
              },
              {
                q: "A boy has abrupt onset of high fever, maculopapular rashes over the chest and upper limbs, severe frontal headache and myalgia. He attended a festival one week back where had an exposure to Aedes mosquito. Probable clinical diagnosis is:",
                options: ["Ebola virus disease", "Dengue", "West Nile fever", "Kyasanur forest disease"],
                answer: 1,
                explanation: ""
              },
              {
                q: "In dengue shock syndrome, which of the following feature is an indicator of shock?",
                options: ["Hepatomegaly", "Pulse pressure <20 mm Hg", "Thrombocytopenia", "Retro-orbital pain"],
                answer: 1,
                explanation: ""
              },

              // ── Malaria & Babesia ──
              {
                q: "Appearance of fever paroxysm every 72 hours (Quartan periodicity of malaria) is seen in infection with:",
                options: ["Plasmodium vivax", "Plasmodium falciparum", "Plasmodium malariae", "Plasmodium ovale"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which of the following is the infective form of the malari parasite to man when transmitted by mosquito bite?",
                options: ["Merozoite", "Sporozoite", "Trophozoite", "Gametocyte"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the following is the infective form of the malaria parasite to man when transmitted by blood transfusion?",
                options: ["Merozoite and trophozoites", "Sporozoite", "Gametocyte", "All of the above"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A lady with high grade fever, chills, and splenomegaly became delirious. Peripheral blood smear showed multiple ring forms inside the parasitized RBCs. The clinical condition is:",
                options: ["Meningitis", "Cerebral malaria", "Pernicious malaria", "Trypanosomiasis"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A 21-year-old boy with high-grade fever with chills and splenomegaly became delirious. Peripheral blood smear showed sickle-shaped forms inside the RBCs. The probable causative agent is:",
                options: ["Plasmodium vivax", "Plasmodium falciparum", "Plasmodium malariae", "Plasmodium ovale"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A malaria patient develops sudden rise in fever and star passing dark urine after starting new malaria medicine. The following statement about this phenomena are correct EXCEPT:",
                options: [
                  "Dark urine due to hemoglobinuria",
                  "It is precipitated by the antimalarial drug chloroquine",
                  "Hemolysis occurs due to autoimmune mechanism",
                  "Associated with falciparum malaria"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "A person is diagnosed with malaria. Peripheral smear stud has shown Plasmodium vivax. Which of the following is t correct treatment for this case?",
                options: [
                  "Chloroquine (over three days)",
                  "Primaquine (single dose)",
                  "Chloroquine (3 days) + primaquine (single dose)",
                  "Chloroquine (3 days) + primaquine (for 14 days)"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "A 40-year-old man presented with fever, chills, an splenomegaly. Peripheral smear showed ring forms insid RBCs arranged in tetrads. The causative organism is:",
                options: ["Plasmodium falciparum", "Plasmodium vivax", "Plasmodium malariae", "Plasmodium ovale", "Babesia microti"],
                answer: 4,
                explanation: ""
              },
              {
                q: "A 40-year-old man presented with fever with chills and splenomegaly. Peripheral smear showed ring forms inside RBCs arranged in tetrads. The causative organism in transmitted by the bite of:",
                options: ["Mite", "Sandfly", "Soft tick", "Hard tick"],
                answer: 3,
                explanation: ""
              },

              // ── Kala azar / Leishmaniasis ──
              {
                q: "A child from Bihar presented with fever, progressive weight loss and painless gradual distension of abdomen since 2 months. He had hepatosplenomegaly and blood investigations showed pancytopenia and hypergammaglobulinemia. What is the most probable clinical condition?",
                options: ["Malaria", "Typhoid", "Kala azar", "Brucellosis"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A 23-year-old female from Jharkhand presented with fever, hyperpigmentation on face, progressive weight loss, and painless gradual distension of abdomen since 2 months. He had hepatosplenomegaly, and blood investigations showed pancytopenia and hypergammaglobulinemia. What is the infective form of this etiological agent for humans?",
                options: ["Amastigote", "Promastigote", "Trypomastigote", "Metacyclic trypomastigote"],
                answer: 1,
                explanation: ""
              },
              {
                q: "63-year-old man from Bihar presented with high-grade fever, hyperpigmentation on hands, feet, and abdomen, progressive weight loss, and painless gradual distension of the abdomen since 2 months. He had hepatosplenomegaly and blood investigations showed pancytopenia and hypergammaglobulinemia. What is the mode of transmission of the etiological agent of this clinical condition?",
                options: [
                  "Bite of reduviid bug",
                  "Bite of sandfly",
                  "Rubbing of the feces of reduviid bug on abraded skin",
                  "Bite of tsetse fly"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "A man from Darbhanga (Bihar) had fever and splenomegaly for one month along with weight loss. The bone marrow aspirate collected from the patient was subjected to culture on Novy-MacNeal-Nicolle (NNN) medium (picture). What is true about this test?",
                options: [
                  "Inoculated specimens should be incubated at ambient temperature (24-26°C) and examined weekly for 4 weeks before declared as negative",
                  "Amastigote forms are demonstrated in culture fluid microscopy",
                  "Promastigote forms are demonstrated in culture fluid microscopy",
                  "Culture is found to be positive in 75% of cases"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "A man from South America had a painful subcutant nodule on the face and unilateral painless ed of the eyelid. Subsequently, he developed hepatosplenomegaly, and lymphadenopathy. peripheral blood smear examination showed approximately 20 um C-shaped trypomastigote for probable mode of transmission is:",
                options: [
                  "Rubbing of the reduviid bug's feces on skin",
                  "Bite of a reduviid bug",
                  "Bite of sandfly",
                  "Bite of the tsetse fly"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "Vector for leishmaniasis:",
                options: ["Sandfly", "Reduviid bugs", "Tsetse fly", "Anopheles mosquito"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Amastigote form of Leishmania donovani resides in the:",
                options: [
                  "Gastrointestinal tract of insect vector",
                  "Salivary gland of mosquito",
                  "Cells of reticuloendothelial system",
                  "NNN culture media"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "All are true about visceral leishmaniasis in India, EXCEPT:",
                options: [
                  "Leishmania donovani is the most common species",
                  "Leishmaniasis in India is zoonotic",
                  "Vector is Phlebotomus argentipes",
                  "Young adults are affected"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "All are true about post-kala-azar dermal leishmaniasis (PKDL), EXCEPT:",
                options: [
                  "Nonulcerative lesion of skin",
                  "Occurs in 2-50% of visceral leishmaniasis",
                  "Amphotericin B is the drug of choice",
                  "Heals quickly with treatment"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "All are true about direct microscopy for the diagnosis of visceral leishmaniasis, EXCEPT:",
                options: [
                  "LD bodies containing promastigote forms are the diagnostic forms",
                  "Splenic biopsy is the most sensitive in demonstrating the diagnostic form",
                  "Bone marrow is the most preferred sample to demonstrate",
                  "Buffy coat examination is useful in HIV infected persons"
                ],
                answer: 0,
                explanation: ""
              },

              // ── Filariasis ──
              {
                q: "A person from Uttar Pradesh presents with high-grade fever, enlargement of axillary and inguinal lymph nodes, which are firm, discrete, tender, funiculitis and epididymitis. The clinical condition is caused by:",
                options: ["Brugiamalayi", "Wuchereria bancrofti", "Plasmodium falciparum", "Leishmania donovani"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A person from Bihar presents with high-grade fever, enlargement of axillary and inguinal lymph nodes, which are firm, discrete, tender and has features of epididymitis and hydrocele. The thick and thin peripheral blood smear is likely to show:",
                options: [
                  "Banana shaped gametocytes in RBCs",
                  "Amastigotes inside the phagocytic cells",
                  "Microfilaria with tail tip pointed, free of nuclei",
                  "Microfilaria with tail tip blunt, nuclei extended up to tail tip"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "A clinically suspected case of filariasis, microfilaria may not be demonstrated in spite of DEC provocation dose. This may be because of the following reasons, EXCEPT:",
                options: [
                  "Occult filariasis",
                  "Chronic filariasis",
                  "Acute Adenolymphangitis stage",
                  "Subperiodic strains of Wuchereriabancrofti"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "A person presents with high-grade fever, enlargement of axillary and inguinal lymph nodes, which are firm, discrete, tender and has features of epididymitis. The probable diagnosis is:",
                options: ["Malaria", "Kala azar", "Filariasis", "Trypanosomiasis"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A parasite causes swelling of legs and hydrocele. Iti commonly transmitted by:",
                options: ["Culex fatigans", "Anopheles", "Mansonia", "Aedes aegypti"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which of the following microfilaria comes to peripher blood in the day time?",
                options: ["Brugiamalayi", "Wuchereria bancrofti", "Loa loa", "Brugiatimori"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which of the following microfilaria does not shor periodicity?",
                options: ["Brugia malayi", "Wuchereria bancrofti", "Loa loa", "Oncocerca volvulus"],
                answer: 3,
                explanation: ""
              },
              {
                q: "All are true about life cycle of filarial parasite, EXCEPT:",
                options: [
                  "Man is intermediate host",
                  "Mosquito is definitive host",
                  "Culex bites at night, whereas Aedes bites in daytime",
                  "Microfilaria are infective stage for humans"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "All are true about occult filariasis, EXCEPT:",
                options: [
                  "Due to hypersensitivity reaction to microfilaria antigen",
                  "Microfilaria are filtered, lodged and destroyed in the lu",
                  "Microfilaria are demonstrable in blood collected betw 9pm and 4 am only",
                  "Presents as tropical pulmonary eosinophilia"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "All are true about antigen detection test for filariasis, EXCEPT:",
                options: [
                  "Antigens can be detected in daytime",
                  "Antigen detection methods are not available for Bl infection",
                  "Antigens cannot differentiate the current from past infection",
                  "More sensitive than smear microscopy"
                ],
                answer: 2,
                explanation: ""
              },

              // ── Fungal bloodstream & systemic mycoses ──
              {
                q: "A patient with high grade fever and low neutrophil coun was admitted to hospital. He was kept on broad spectrun antibiotic since 1 week, but did not respond. Gram stair of the flagged blood culture bottle (BacT/ALERT) showed gram-positive oval budding yeast cells. The etiological agent is:",
                options: ["Candida species", "Cryptococcus species", "Trichosporon species", "Malassezia species"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A lady from America had developed flu-like illness. She has pulmonary infiltrates in the chest X-ray with hilar and mediastinal lymphadenopathy. Sputum culture reveal yeast form at 37°C and mold form (septate thin hyphae with tuberculate macroconidia) obtained at 25°C. This confirm the organism as:",
                options: [
                  "Histoplasma capsulatum",
                  "Paracoccidioides brasiliensis",
                  "Cryptococcus neoformans",
                  "Coccidioides immitis"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "A man from a village on the banks of Mississippi River presented with fever, breathlessness and productive cough for 2 weeks. Verrucous skin lesions were observed on his limbs and chest. Microscopic examination o brochoalveolar lavage showed broad based budding yeast cells. The probable etiological agent is.",
                options: ["Histoplasma capsulatum", "Blastomyces dermatitidis", "Cryptococcus neoformans", "Candida albicans"],
                answer: 1,
                explanation: ""
              },
              {
                q: "An elderly man has chronic cough with expectoration with chest radiography showing bilateral lower lobe fibrosis Sputum ZN smear is negative and aerobic bacterial culture grew no pathogens. Sputum microscopy reveals round thick-walled yeasts, with multiple narrow-necked buds attached circumferentially (pilot wheel appearance). The probable clinical diagnosis is:",
                options: ["Histoplasmosis", "Cryptococcosis", "Coccidioidomycosis", "Paracoccidioidomycosis"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Blood culture from a diabetic patient with features of seps yielded gram positive budding yeast cells. The organs. was identified as Candida krusei using VITEK. Which ofth following antifungal needs to be avoided in this case?",
                options: ["Liposomal amphotericin B", "Caspofungin", "Fluconazole", "Anidulafungin"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Commonest fungus causing bloodstream infection is:",
                options: ["Candida species", "Cryptococcus species", "Malassezia species", "Trichosporon species"],
                answer: 0,
                explanation: ""
              },
              {
                q: "All of the following tests are useful in identifying Candida species, EXCEPT:",
                options: [
                  "Germ tube test",
                  "Dalmau plate culture",
                  "Growth on CHROMagar",
                  "Growth at 25°C and 45°C to show different morphological forms"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "The colonies of Candida grown on Sabouraud dextrose agar are inoculated on to serum and incubated. Then a wet mount is screened, which showed tube like elongation of yeast cells. It is suggestive of:",
                options: ["Candida tropicalis", "Candida albicans", "Candida parapsilosis", "Candida glabrata"],
                answer: 1,
                explanation: ""
              },
              {
                q: "The following methods are used for the rapid and reliable species identification of Candida, EXCEPT:",
                options: ["Chromagar medium", "Vitek2", "MALDI-TOF", "PCR"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which of the following is a marker of invasive fungal infection?",
                options: ["B-d-Glucan assay", "Specific cell wall mannan", "Capsular antigen", "Galatomannan antigen"],
                answer: 0,
                explanation: ""
              }
            ]
          },
          "git-hepatobiliary": {
            name: "GIT & Hepatobiliary",
            emoji: "🩺",
            questions: [
              {
                q: "A tourist gives history of consuming raw selfish followed by watery diarrhea, Gram staining reveals, Gram-negative, TCBS green color colonies seen. The most likely bacteria is-",
                options: ["Campylobacter jejuni", "Vibrio parahaemolyticus", "Enterotoxigenic E. coli", "Giardia lamblia"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A 35-year-old male patient with history of step ladder fever, diarrhoea and constipation for 5 days presents to a clinic with altered sensorium. Blood culture reveals Non lactose fermenting colonies. The drugs used in empirical therapy are all except-",
                options: ["Ceftriaxone", "Ciprofloxacin", "Azithromycin", "Chloramphenicol"],
                answer: 3,
                explanation: ""
              },
              {
                q: "A 25-year-old woman working in a tea-estate presents to OPD with pallor, dysponea and pruritic serpiginous skin rash on the ankle. The most likely parasite is-",
                options: ["Hookworm", "Roundworm", "T.trichiura", "H.nana"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A middle-aged man presents with fever and abdominal tenderness, US abdomen shows hypoechoic lesion in right lobe of liver with homogenous content. The probable lab diagnosis is-",
                options: ["Liver abscess", "Hepatoma", "Hydatid cyst", "Secondaries"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A 25-year-old man presents with high grade fever and right abdominal tenderness; US abdomen shows hepatomegaly with hypoechoic lesion in right lobe of liver with homogenous content. Aspirate shows anchovy sauce pus. The probable lab diagnosis is-",
                options: ["Amoebic liver abscess", "Hepatatoma", "Hydatid cyst", "Secondaries"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A 25-year-old woman presents with pain right abdominal region, US abdomen shows space occupying cystic lesion in right lobe of liver On surgical excision three layered cyst with brood capsule was seen. The probable lab diagnosis is-",
                options: ["Amoebic liver abscess", "Toxocara", "Hydatid cyst", "Fasciola"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A person with portal hypertension, hepatomegaly, splenomegaly shows Symmers pipestem fibrosis in biliary tract. Most likely diagnosis is-",
                options: ["S. mansoni", "S. hematobium", "F. buski", "P. westermanii"],
                answer: 0,
                explanation: ""
              },
              {
                q: "In a summer camp 10 children developed fever, nausea, vomiting for 2-3 days. 4 had icterus in the next 6days. The most probable diagnosis is –",
                options: ["Hepatitis B", "Hepatitis C", "Hepatitis A", "Hepatitis D"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Assertion & Reasoning:\nAssertion (A): V. cholerae causes 'Rice water stool\"\nReasoning (R): Cholera toxin leads to increased cAMP",
                options: [
                  "Both A & R are true, and R is the correct explanation of A",
                  "Both A & R are true, and R is not the correct explanation of A",
                  "A is true, but R is false",
                  "A is false, but R is true"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "Parasite causing B 12 deficiency anemia is-",
                options: ["D. latum", "A. duodenale", "N. americanus", "T. trichiuria"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Multiple Completion type-\nWhich of the following are characteristics of HBV-\n1. DNA virus\n2. Enveloped virus\n3. Blood borne virus\n4. Oncogenic virus",
                options: [
                  "Only 1,2,3 are correct",
                  "Only 1 & 3 are correct",
                  "Only 2 & 4 are correct",
                  "All four are correct"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "Multiple Completion type-\nA 20-year-old has undergone screening for blood borne infection. Which is an antigen for HBV infection?\n1. HBsAg   2. NS1 Ag   3. P-17 Ag   4. HeAg",
                options: [
                  "1 & 2 are correct",
                  "1 & 4 are correct",
                  "2 & 3 are correct",
                  "All four are correct"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "Assertion & Reasoning:\nAssertion (A): Hookworm causes anemia\nReasoning (R): Hookworm leads to reduced iron absorption",
                options: [
                  "Both A & R are true, and R is the correct explanation of A",
                  "Both A & R are true, and R is not the correct explanation of A",
                  "A is true, but R is false",
                  "A is false, but R is true"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "30-year-old tea estate worker has anemia following hookworm infection, The most likely pathogenesis is-",
                options: ["Megaloblastic", "Microcytic hypochromic", "Hemolytic", "Nutritional"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A child was being evaluated for anemia and growth retardation. Stool examination reveals barrel shaped, bile-stained eggs with mucous plugs. The most likely parasite is-",
                options: ["T.trichiura", "E.vermicularis", "Ascaris lumbricoides", "H. nana"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A HIV positive patient is infected by S. stercoralis, on stool examination the most likely morphological form seen is-",
                options: ["Larvae", "Cyst", "Decorticated Egg", "Fertilized Egg"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A 50-year-old female patient, with esophageal varices and portal hypertension presents to Gastroenterology OPD. Stool examination reveals bile-stained oval eggs with lateral knob. Most likely pathogen is-",
                options: ["S. mansoni", "S. japonicum", "S. hematobium", "F. buski"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A 56-year-old male patient visits medicine OPD with complains of intermittent dysentery for 3 to 4 months. Mild hepatosplenomegaly is seen. Stool examination reveals bile-stained oval eggs with lateral spine-",
                options: ["S. mansoni", "S. japonicum", "S. hematobium", "F. buski"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A 23-year-old college student presents to the OPD with foul smelling greasy stool. He also complains of flatulence. Stool examination reveals motile trophozoites with falling leaf motility",
                options: ["G.lamblia", "B. coli", "E. histolytica", "E. coli"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A 25-year-old male with acid-peptic disease underwent endoscopy in the gastro enterology department. Silver staining reveals spiral bacilli and urease breath test is positive. The most likely pathogen is-",
                options: ["S.minus", "Borrelia", "C.jejuni", "H.pylori"],
                answer: 3,
                explanation: ""
              },
              {
                q: "A 60-year-old male patient is diagnosed with Hepato Cellular Carcinoma. Serology is positive for HBSAg Antigen. The following statement is true for the pathogen responsible-",
                options: [
                  "It is a DNA virus",
                  "It is not a blood borne virus.",
                  "Carrier stae is rare",
                  "There is no vaccine available."
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "A liver biopsy of a patient with Hepato Cellular Carcinoma reveals HCV DNA. The following statement is true-",
                options: [
                  "It is a DNA virus",
                  "It is associated with chronic carrier state.",
                  "It is not transmitted parenterally.",
                  "It is non-enveloped virus"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "A HIV positive female aged 32 years visit the Medicine OPD with complains of diarrhea and weight loss. Fresh stool examination reveals 200um motile larvae. The most likely pathogen is-",
                options: ["S.stercoralis", "Hookworm", "T.spiralis", "E.vermicularis"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A HIV positive male patient of 34 years gives history of migrating pruritic raised erythematous lesions. Patient also has mild diarrhea. Most likely parasitic form seen in the stool sample is-",
                options: ["Egg", "Trophozite", "Cyst", "Larva"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Following a school picnic 20 children complained of nausea, vomiting and jaundice. The most likely virus responsible is-",
                options: ["HDV", "HAV", "HBV", "HCV"],
                answer: 1,
                explanation: ""
              },
              {
                q: "In an apartment complex 8 families of 16 developed nausea, vomiting, and jaundice. On investigation sewage water pipeline mixing with potable water was seen. The most likely virus responsible is-",
                options: ["HEV", "HCV", "HDV", "HBV"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A village reported sudden cases of diarrhea with 50 villagers developing rice water stool. The most likely transport media lab must prepare in bulk is-",
                options: ["Alkaline peptone water", "Sacchs Buffered glycerol saline", "Amies transport media", "GNB broth"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Stool sample from a patient with severe diarrhoea revealed darting motility, TCBS media revealed yellow-colored colonies. Most likely pathogen is-",
                options: ["E.coli- EPEC", "V. cholerae", "E.coli- ETEC", "C.jejuni"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Following consuming meat burger an 8-year-old child developed petechial rashes on the skin, renal failure, and seizures. The most likely pathogen is-",
                options: ["EIEC", "EHEC", "EPEC", "ETEC"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Following consuming meat burger an 8-year-old child developed petechial rashes on the skin, renal failure, and seizures. The pathogen associated was O157H7 EHEC. The associated syndrome is-",
                options: [
                  "Hemolytic Uremic Syndrome",
                  "Fitz-Hugh Curtis Syndrome",
                  "Gullian Barre Syndrome",
                  "Water House Fedrich syndrome"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "A 32-year-old male patient has rose patches on skin, step ladder fever, leucopenia, hepatosplenomegaly for 4 days. The best sample to isolate Salmonella is-",
                options: ["Serum", "Stool", "Blood", "Urine"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A 32-year-old male patient has rose patches on skin, step ladder fever, leucopenia, hepatosplenomegaly, alternate diarrhea, and constipationsince 14days. Ideal selective media for stool sample is-",
                options: ["Wilson & Blair Media", "TCBS", "PT media", "LJ Media"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Super carriers are differentiated from simple carriers by-",
                options: [
                  "Absence of HBSag antigen",
                  "Presence of HBeAg and ABV DNA",
                  "Presence of IgG HBcAg",
                  "Presence of IgM HBcAg"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "A lab technician has documented proof of HBV vaccine 6 years back. The best course to protect him against HBV virus is-",
                options: ["Restart vaccine series", "Complete vaccination series", "Estimate HBs Ab titer", "Give a booster dose"],
                answer: 1,
                explanation: ""
              },
              {
                q: "An apparently healthy pregnant lady developed fever jaundice and died. There is no history of high-risk behavior or blood transfusion. Most likely pathogen is-",
                options: ["HBV", "HCV", "HEV", "HDV"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A person with HBV infection is considered infectious as long as the following marker is isolated in serum-",
                options: ["HBSAg", "HBeAg", "Anti HBcAg", "Anti HbsAg"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Military troop of 20 soldiers developed jaundice, nausea, and vomiting. Anti-HAV IgM is positive in the serum. Treatment of choice is-",
                options: ["Tenofovir", "Interferon alfa", "Symptomatic", "Telbivudine"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A 56-year-old veterinary surgeon presents to the OPD with fever and right abdominal pain. US abdomen reveals cystic lesion with 'water lily'like structure. The definitive host for the pathogen is-",
                options: ["Dog", "Sheep", "Man", "Fish"],
                answer: 0,
                explanation: ""
              }
            ]
          },
          "skin-soft-tissue": {
            name: "Skin & Soft Tissue",
            emoji: "🧫",
            questions: [
              // ── Scenario-based: viral exanthems, toxins & pyogenic infections ──
              {
                q: "A 28 yrs old menstruating woman appeared in the emergency room with the following signs & symptoms- fever, 104 deg C fever, WBC -16000, BP 90/65mmHg. A scarlatiniform rash on her trunk, palms & soles, extreme fatigue, vomiting & diarrhoea. The patient described in this case most likely has which of the following",
                options: ["Chicken pox", "GB syndrome", "SSS", "TSS"],
                answer: 3,
                explanation: ""
              },
              {
                q: "A 9 year boy presented with fever and nonspecific symptoms followed by a distinctive rash on the cheeks. which of the following viruses may cause this disease",
                options: ["HSV", "Parvo", "Rubella", "Rubeola"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A viral organism was isolated from a painful blister on the lip of a teenage girl. The agent was found to contain double standard linear DNA and was enveloped. the paient had a similar sore approximately 2 months ago. which of the following is the most likely causative organism",
                options: ["Adeno", "Coxsackie", "HS type 1", "Herpes Zoster"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A diabetic patient developed cellulitis due to S.aureus which was found to be MRSA on the AST. All the following antibiotics will be appropriate except",
                options: ["Vancomycin", "Imipenem", "Teicoplanin", "Linezolid"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A woman had a high fever, hypotension & a diffuse macular rash. when all cultures showed no bacterial growth, a diagnosis of toxic shock syndrome was made. Regarding the mechanism by which the toxin causes this disease, which one of the following is least accurate?",
                options: [
                  "The toxin is not processed with in the macrophage",
                  "The toxin binds to both the class II MHC protein & the T cell receptors.",
                  "The toxin activates many CD4 positive T cells & large amount of interleukins are released",
                  "The toxin has an A-B subunit structure. The B subunit binds to the receptor, and the A subunit enters the cells & activates them"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "A 3year old girl presented to her pediatrician's office with fever, swollen lymph node, & a vesicular rash on her chest and upperarm. The vesicles were at various stages of development: some were newly forming, while some were crusted over. Which of the following infectious agents is the most likely cause of this girl's rash.",
                options: ["Small pox", "Parvovirus B 19", "EBV", "VZV"],
                answer: 3,
                explanation: ""
              },
              {
                q: "A 5 year old boy is brought into the clinic with a rash that started on his trunk and now has spread to his face and extremities. Other than the rash, he appeared healthy. his vital signs are temperature of 37.8degC, pulse 100/min, blood pressure 110/80mmhg and respirations 21/min. He started kindergarten 3 weeks ago and mentions that some of his classmates have had a similar rash and had to miss school. A physical exams reveals a rash that is primarily on the boy's abdomen; there are a few lesions on his face and extremities. This child has no history of immunizations. Which of the following is the most likely disease affecting the patient",
                options: ["Chicken pox", "Rubella", "Rubeola", "Shingles"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A 5 year old boy is brought into the clinic with a rash that started on his trunk and now has spread to his face and extremities. Other than the rash, he appeared healthy. his vital signs are temperature of 37.8degC, pulse 100/min, blood pressure 110/80mmhg and respirations 21/min. He started kindergarten 3 weeks ago and mentions that some of his classmates have had a similar rash and had to miss school. A physical exams reveals a rash that is primarily on the boy's abdomen; there are a few lesions on his face and extremities. This child has no history of immunizations. Which virus is the most likely cause of this patient's infection?",
                options: ["Rubella virus", "Measles virus", "Herpes Simplex virus", "Varicella Zoster virus"],
                answer: 3,
                explanation: ""
              },
              {
                q: "A 35 year old man complains that his left hip is painful after being punctured by a tool when he was at work 4 days ago. After cleaning the wound quickly, he went on about his work. The wound now has pus in it and it is erythematous and swollen. Physical examination reveals a purulent and relatively deep skin lesion with an erythematous swollen region around the puncture that extends upto 2cm from the wound. Asample of the puruleny material obtained from the lesion is cultured on a blood agar plate 7 Gram stained. The resulting colonies are Gram positive cocci in clusters that are beta heolytic, catalase positive, & coagulase positive. Which of the following organisms is the most likely cause of this patient's infection?",
                options: [
                  "Streptococcus pyogenes",
                  "Staphylococcus epidermidis",
                  "Staphylococcus aureus",
                  "Clostridium perfringens"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "A 55 year old man came to the clinic with complaints of pain on the right lower portion of his ribcage. Physical examination elicits pain to the touch along the intercostal dermatome. Vesicular skin lesions are also observed. which of the following is the most likely cause of this patient's condition?",
                options: ["Herpes Simplex virus 1", "Herpes simplex virus 2", "CMV", "VZV"],
                answer: 3,
                explanation: ""
              },
              {
                q: "A middle aged lady presented with diffuse, spreading, painful red swelling of left leg. Margins were ill defined, and she had fever with chills. The lesion is typically caused by:",
                options: ["Streptococcus pyogenes", "Bacteroides spp", "Clostridium perfringens", "Erysipelothrixrhusiopathiae"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A diabetic lady developed furuncles at the back of her neck that coalesced and spread more deeply, later forming multiple draining sinuses. The Gram stain of the pus is most likely to show:",
                options: ["GPC in chains", "GPC in clusters", "GNB", "GPB"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Hidradenitis is a chronic infection of obstructed apocrine(sweat) glands in the axilla, genital, or perianal areas with intermittent discharge (often foul smelling pus). This condition can be caused by all of the following except",
                options: ["Staphylococcus aureus", "Pseudomonas aeruginosa", "Streptococcus agalactiae", "Bacteroides spp"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A person with a second degree burn develops greenish pus oozing from the burn,s wound. The most likely pathogen is :",
                options: ["Staphylococcus aureus", "Pseudomonas aeruginosa", "Klebsiella oxytoca", "Acinetobacter baumannii"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A lady aged 56 years presented with a non-healing ulcer on the right foot for a month. She is diabetic with poor control of blood agar. Best sample to identify the pathogen is:",
                options: ["Discharge using a swab", "Slough at the floor of the ulcer", "Washings with sterile saline", "Debrided infected tissue"],
                answer: 3,
                explanation: ""
              },
              {
                q: "A newborn developed localized tender blisters andbullae later, leading to exfoliation of skin. Staphylococcal toxin responsible for this condition is:",
                options: ["Epidermolytic toxin", "Panton-Valentine toxin", "Gamma hemolysin", "Toxic shock syndrome toxin"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A man presented with fever, desquamating rash, hypotension. He also has an abscess in gluteal region and pus drained has grown Staphylococcus aureus. The mechanism behing the generalized symptom is:",
                options: ["Toxic shock syndrome toxin", "Panton Valentine toxin", "Exfoliative toxin", "Hemolysin"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A man has developed painful pustular lesion in hairy, moist regions due to infection of the hair follicles. A clinical diagnosis of furuncle(boil) was made. Which of the following biochemical tests is useful for the identification of the most likely causative agent of this condition?",
                options: ["Coagulase test", "CAMP test", "Bile esculin test", "Bacitracin susceptibility test"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A lady breastfeeding a child aged 7 days developed a tender nodular lesion around the nipple with pus pointing. A clinical diagnosis of breast abscess was made. The gram staining of the pus is most likely to show:",
                options: ["GPC in chains", "GPC in clusters", "GNB", "GPB"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A man has swollen left foot, discharging sinuses, and discharge contains granules. Selective culture media used to isolate Actinomycetes and fungi have yielded no growth. The probable causative organisms could be:",
                options: ["Mycobacterium tuberculosis", "Yersinia pestis", "Chlamydophila pneumoniae", "Staphylococcus aureus"],
                answer: 3,
                explanation: ""
              },
              {
                q: "In a neonatal ICU, a cluster of staphylococcal infections with similar antibiotic sensitivity pattern was observed. It was planned to screen healthcare workers of that ICU for Saphylococcal carriage. Ideal body site from where swabs can be collected is :",
                options: ["Anterior nares", "Pharynx", "Throat", "Rectum"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A man has developed recurrent follicular infections in the axilla, which is rich in apocrine glands. A clinical diagnosis of hidradenitis suppurativa was made. The culture of the pus specimen in nutrient agar yielded golden yellow colonies. The selective medium preferred to isolate Staphylococcus aureus is:",
                options: ["Sheep blood agar", "Crystal violet blood agar", "Mannitol salt agar", "MacConkey agar"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Staphylococcus aureus isolated from an abscess was found to be resistant to sefoxitin and sensitive to linezolid, clindamycin and vancomycin. The preferred antibacterial agent is",
                options: ["Cloxacillin", "Clindamycin", "Vancomycin", "Amoxicillin-clavulanic acid"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A person developed a tender, bright red, swollen and indurated peau\"d orange texture of involved skin along with fever and chills. The causative agent of this type of lesion is:",
                options: ["Staphylococcus aureus", "Streptococcus pyogenes", "Clostridium perfringens", "Coagulase negative Staphylococcus"],
                answer: 1,
                explanation: ""
              },
              {
                q: "A man developed acute painful skin lesions at the ankle region with minimal erythema at the site of involvement, later the skin became dusky and anesthetized associated with extensive necrosis of subcutaneous tissue, fascia and muscle. This condition is known as :",
                options: ["Erysipelas", "Impetigo", "Necrotizing fasciitis", "Cellulitis"],
                answer: 2,
                explanation: ""
              },

              // ── Skin flora, lesions & soft-tissue infections ──
              {
                q: "Normal resident microbial flora of skin includes all of the following, EXCEPT:",
                options: ["Coagulase-negative staphylococci", "Anaerobic bacteria", "Corynebacterium diphtheriae", "Propionibacterium acnes"],
                answer: 2,
                explanation: ""
              },
              {
                q: "All of the following can produce purpuric lesions, EXCEPT:",
                options: ["Endocarditis", "Meningococcal septicaemia", "Molluscum contagiosum virus", "Dengue virus"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Ecchymosis (extravasation of blood into skin, of size >1 cm) could be due to:",
                options: ["Marburg virus", "Rubella virus", "Cytomegalovirus", "Streptococcus pyogenes"],
                answer: 0,
                explanation: ""
              },
              {
                q: "A person presents with fever and eschar on his forearm. It could be because of:",
                options: ["Yersinia pestis", "Mycobacterium marinum", "Orientia tsutsugamushi", "Epidermophyton floccosum"],
                answer: 2,
                explanation: ""
              },
              {
                q: "A diabetic lady presented with skin lesions that were dry, scaly, itchy, and discoloured (reddish brown) for 2 months. the causative agent could be:",
                options: ["Streptococcus pyogenes", "Corynebacterium minutissimum", "Staphylococcus aureus", "Treponema pallidum"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Nail of a patient is separated from nail bed, becomes green with foul Odour. The causative agent is:",
                options: ["Staphylococcus aureus", "Streptococcus pyogenes", "Pseudomonas aeruginosa", "Bacteroides species"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Fournier's gangrene is a rare and often fulminant necrotizing fasciitis of the perineum and genital region frequently due to:",
                options: ["Staphylococcus aureus", "Pseudomonas aeruginosa", "Mixed aerobic and anaerobic bacteria", "Acinetobacter species"],
                answer: 2,
                explanation: ""
              },
              {
                q: "All are true about the quantitative culture of tissue biopsy specimens in burns, EXCEPT:",
                options: [
                  "Useful to identify the most prevalent organism in a polymicrobial infection",
                  ">105 CFU/g of tissue is indicative of a potentially serious infection",
                  "Cannot differentiate commensals from pathogens with certainty",
                  "Useful to assess the severity of infection"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "Chronic draining sinuses may be found in the following infections, EXCEPT:",
                options: [
                  "Malassezia furfur infections",
                  "Nontuberculous mycobacterial infections",
                  "Actinomycosis",
                  "Infections associated with implanted foreign bodies"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "All of the following are preferred samples for culture of infected diabetic foot, EXCEPT:",
                options: [
                  "Aspirated fluid",
                  "Wound swab from the ulcers",
                  "Pus taken from a deep pocket within the wound",
                  "Debrided infected tissue"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "Nodular lymphangitis commonly follows superficial inoculation with one of the following organisms, EXCEPT:",
                options: ["Sporothrixschenckii", "Nocardia brasiliensis", "Wuchereriabancrofti", "Francisella tularensis"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Myositis is seen in all of the following, EXCEPT:",
                options: ["Kala azar", "Chagas'disease", "Cysticercosis", "Trichinellosis"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Reactive polyarthritis is seen in all of the following, EXCEPT:",
                options: ["Yersinia enterocolitica", "Vibrio cholerae", "Shigella flexneri", "Campylobacter jejuni"],
                answer: 1,
                explanation: ""
              },
              {
                q: "The most common cause of acute osteomyelitis is:",
                options: ["Staphylococcus aureus", "Streptococcus pyogenes", "Salmonella Typhi", "Brucella species"],
                answer: 0,
                explanation: ""
              },

              // ── Staphylococcus ──
              {
                q: "All the following are correct regarding the cell wall-associated virulence factor of Staphylococcus aureus and its action, EXCEPT:",
                options: [
                  "Peptidoglycan: Provides rigidity to cell wall",
                  "Clumping factor: Inhibition of opsonization",
                  "Teichoic acid: Adhesion of cocci to mucosal surfaces",
                  "Protein-A: Anti-complementary"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "All of the following are mediated by exfoliative toxin of Staphylococcus aureus, EXCEPT:",
                options: ["Pemphigus neonatorum", "Bullous impetigo .", "Toxic shock syndrome", "Scalded skin syndrome"],
                answer: 2,
                explanation: ""
              },
              {
                q: "True about staphylococcal enterotoxin is:",
                options: [
                  "All strains produce the toxin",
                  "Type B is most common to cause food poisoning",
                  "Produced by the organism after infecting the tissue",
                  "Incubation period is less than 6 hours"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "Synergohymenotropic toxins includes:",
                options: [
                  "alpha-hemolysin and panton-valentine toxin",
                  "Beta -hemolysin and panton-valentine toxin",
                  "gamma-hemolysin and panton-valentine toxin",
                  "alpha -hemolysin and Betahemolysin"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "Single commonest test used to differentiate Staphylococcus aureus from other species of Staphylococcus is:",
                options: ["Catalase", "Coagulase", "Oxidase", "Gram stain morphology"],
                answer: 1,
                explanation: ""
              },
              {
                q: "The commonest site of colonization of Staphylococcus aureus responsible for nosocomial spread of infection is:",
                options: ["Anterior nares", "Vagina", "C. Axilla", "Perineal skin"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Nosocomial spread of Staphylococcus aureus to patients can take place from:",
                options: ["Hospital staff", "Other patients", "Patient's own endogenous flora", "All of the above"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Staphylococci can be differentiated from streptococci by:",
                options: ["Coagulase test", "Catalase test", "Mannitol fermentation", "Oxidase test"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Staphylococcus aureus isolated from an abscess was found to be sensitive to cefoxitin, penicillin and vancomycin. Then preferred antibiotic is:",
                options: ["Penicillin", "Cloxacillin", "Vancomycin", "Cefoxitin"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Methicillin-resistant Staphylococcus aureus (MRSA) is best detected by performing a disk diffusion test against an antibiotic.",
                options: ["Methicillin", "Cefoxitin", "Oxacillin", "Vancomycin"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Staphylococcus aureus isolated from an abscess was found to be resistant to cefoxitin. All of the above can be given for the treatment of this organism isolated, EXCEPT:",
                options: ["Meropenem", "Vancomycin", "Cotrimoxazole", "Linezolid"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which of the following is the LEAST preferred antimicrobial agent for the treatment of methicillin-sensitive S. aureus (MSSA)?",
                options: ["Cloxacillin", "Cephalexin", "Cefazolin", "Vancomycin"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which of the following is the mechanism of methicilin-resistant Staphylococcus aureus (MRSA)?",
                options: [
                  "Alteration in penicillin-binding protein (PBP) to PBP2a",
                  "Overproduction of beta lactamase",
                  "Mutation in porin channel",
                  "Inhibition of protein synthesis"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "About vancomycin resistant Staphylococcus aureus (VRSA), all are true, EXCEPT:",
                options: [
                  "VRSA is mediated due to Van gene",
                  "VISA is due to increased cell wall thickening",
                  "VRSA is more common than VISA",
                  "Fitness cost phenomena is seen in VRSA"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "The most efficient way to prevent hospital spread of S. aureus is by:",
                options: [
                  "Screening of MRSA carriers among hospital staff",
                  "Treatment of carriers is done by use of topical 2% mupirocin",
                  "Stoppage of antibiotic misuse in hospitals",
                  "Ensure proper infection control measures, such as hand hygiene"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "Staphylococcus epidermidis, all are true, EXCEPT:",
                options: [
                  "Accounts for 75% of coagulase negative staphylococci (CoNS)",
                  "Phosphatase negative",
                  "Produces biofilm",
                  "Causes stitch abscesses"
                ],
                answer: 1,
                explanation: ""
              },

              // ── Streptococcus ──
              {
                q: "Griffith typing used for group A B-hemolytic streptococci is based on:",
                options: ["M protein", "C carbohydrate antigen", "Peptidoglycan layer", "Capsular polysaccharide antigen"],
                answer: 0,
                explanation: ""
              },
              {
                q: "The emm typing is used to classify:",
                options: ["Family Streptococcaceae", "Beta hemolytic streptococci", "Group A Streptococcus", "Alfa hemolytic streptococci"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which of the following organism produces small (1-2 mm) zone of greenish discoloration surrounding the colonies due to partial lysis of red blood cells?",
                options: ["Viridans streptococci", "Streptococcus pyogenes", "Staphylococcus aureus", "Pseudomonas aeruginosa"],
                answer: 0,
                explanation: ""
              },
              {
                q: "All the following are the cell wall antigens of Streptococcus pyogenes, EXCEPT:",
                options: ["Lipoteichoic acid", "M protein", "C carbohydrate antigen", "Capsular polysaccharide antigen"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which of the following cell wall component of Streptococcus pyogenes helps in adhesion to pharyngeal epithelial cells?",
                options: ["Lipoteichoic acid", "M protein", "C-carbohydrate antigen", "Peptidoglycan"],
                answer: 0,
                explanation: ""
              },
              {
                q: "All the following are true about streptolysin-O, EXCEPT:",
                options: [
                  "Strongly antigenic",
                  "Oxygen labile and heat labile",
                  "ASO antibodies are raised following streptococcal pharyngitis",
                  "ASO antibodies (ASO) are raised following streptococcal pyoderma"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "Streptococcal pyrogenic exotoxin is responsible for all of the following, EXCEPT:",
                options: ["Rheumatic fever", "Scarlet fever", "Necrotizing fasciitis", "Toxic shock syndrome"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Which of the following subtype of streptococcal pyrogenic exotoxin (SPE) is coded by bacteriophage?",
                options: ["SPE-A", "SPE-B", "SPE-C", "All of the above"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the following antibody marker is best used for retrospective diagnosis of streptococcal skin infections (pyoderma) and acute glomerulonephritis?",
                options: [
                  "Anti-DNase A antibodies",
                  "Anti-DNase B antibodies",
                  "Anti-DNase C antibodies",
                  "Anti-streptolysin antibodies"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the most common bacterial cause of pharyngitis in children?",
                options: ["Staphylococcus aureus", "Streptococcus pyogenes", "Moraxella catarrhalis", "Coagulase negative Staphylococcus"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Streptococcal impetigo (pyoderma): All are true, EXCEPT:",
                options: [
                  "Risk factors include young children, warmer months, tropical climates, poor hygiene",
                  "Most common sites involved are face (nose and mouth) and legs",
                  "Pustular lesions that coalesce to form honeycomb-like crusts",
                  "Lesions are painful and associated with fever"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "As the lesion of necrotizing fasciitis is likely to be polymicrobial, which of the following selective medium is used to isolate Streptococcus pyogenes?",
                options: ["Mannitol salt agar", "Crystal violet blood agar", "Ludlam's medium", "Pike's medium"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the following statements is WRONG, regarding molecular mimicry between streptococcal antigen and similar human antigen?",
                options: [
                  "Cell wall C carbohydrate: Cardiac valves",
                  "Hyaluronic acid: Synovial fluid",
                  "Peptidoglycan: Skin lesions",
                  "Cell wall M protein: Glomerular vascular intima"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "Serotyping of Streptococcus pyogenes is based on which of the following protein?",
                options: ["M protein", "T protein", "R protein", "Carbohydrate antigen"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Drug of choice for suppurative infections caused by Streptococcus pyogenes is:",
                options: ["Penicillin", "Linezolid", "Cotrimoxazole", "Depends upon antibiotic susceptibility test results"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Streptococcus pyogenes can be differentiated from S.agalactiae by testing susceptibility to:",
                options: ["Optochin", "Bacitracin", "Polymyxin", "Novobiocin"],
                answer: 1,
                explanation: ""
              },
              {
                q: "CAMP test is useful in identification of:",
                options: ["Streptococcus pyogenes", "Streptococcus agalactiae", "Streptococcus pneumoniae", "Viridans streptococci"],
                answer: 1,
                explanation: ""
              },

              // ── Anaerobes & Clostridium ──
              {
                q: "Optimum conditions for growing anaerobic organisms can be achieved by all of the following, EXCEPT:",
                options: [
                  "Mcintosh and Filde's anaerobic jar",
                  "GasPak system",
                  "Anoxomat system",
                  "Candle jar with sealed lid",
                  "Pre-reduced anaerobically sterilized (PRAS) media"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "Anaerobic infection with production of black pigment that fluoresce indicates:",
                options: ["Prevotellamelaninogenica", "Actinomyces", "Clostridium bifermentans", "Chromobacteriumviolaceum"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Antibiotic that is useful in suspected anaerobic infection is:",
                options: ["Ciprofloxacin", "Clindamycin", "Azithromycin", "Cotrimoxazole"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Spindle-shaped bacterial pathogen isolated from pelvic abscess in thioglycollate broth is most likely to be:",
                options: ["Bacillus species", "Clostridium species", "Corynebacterium species", "Bacteroides species"],
                answer: 1,
                explanation: ""
              },
              {
                q: "All of the following are known to produce rapidly spreading edematous myonecrosis following crushing type of injury, EXCEPT:",
                options: ["Clostridium perfringens", "Clostridium novyi", "Clostridioides difficile", "Clostridium septicum"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which of the following is the causative agent of necrotizing enterocolitis?",
                options: ["Clostridium septicum", "Clostridium novyi", "Clostridium perfringens", "Clostridium bifermentans"],
                answer: 2,
                explanation: ""
              },
              {
                q: "Principle toxin responsible for gas gangrene is:",
                options: ["Alpha toxin", "Theta toxin", "Beta toxin", "Delta toxin"],
                answer: 0,
                explanation: ""
              },
              {
                q: "All the following are the established agents of gas gangrene, EXCEPT:",
                options: ["Clostridium septicum", "Clostridium novyi", "Clostridium perfringens", "Clostridium bifermentans"],
                answer: 3,
                explanation: ""
              },
              {
                q: "The alpha toxin which is the principal virulence factor of Clostridium perfringens gas gangrene mediates by all of the following mechanisms, EXCEPT:",
                options: [
                  "Phospholipase C and sphingomyelinase activities",
                  "It activates the platelet adhesion molecule GpIIb/IIIa",
                  "Marked vasodilatation",
                  "Direct suppression of myocardial contractility"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "The incubation period of gas gangrene varies depending upon the type of clostridial species involved. What is the incubation period of gas gangrene due to Clostridium perfringens?",
                options: ["10-48 hours", "2-3 days", "5-6 days", ">7 days"],
                answer: 0,
                explanation: ""
              },
              {
                q: "If the gram stain had shown citron bodies, most probable organism would be:",
                options: ["Clostridium septicum", "Clostridium novyi", "Clostridium perfringens", "Clostridium bifermentans"],
                answer: 0,
                explanation: ""
              },
              {
                q: "Treatment of gas gangrene include all of the following, EXCEPT:",
                options: [
                  "Immediate wound closure after application of antiseptics",
                  "Early surgical debridement",
                  "Penicillin and clindamycin",
                  "Passive immunization with anti-a-toxin antiserum"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "Anaerobic normal oral flora includes all, EXCEPT:",
                options: ["Actinomyces", "Propionibacterium", "Clostridium perfringens", "Spirochetes"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the following is an example of gram-positive non-sporing anaerobes?",
                options: ["Actinomyces", "Propionibacterium", "Clostridium perfringens", "Bifidobacterium"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which of the following obligate anaerobe maintains the vaginal acidic pH that prevents colonization of pathogens?",
                options: ["Leptotrichia", "Lactobacillus", "Fusobacterium", "Bacteroides fragilis"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Bacteroides fragilis: All are true, EXCEPT:",
                options: [
                  "It is the most common commensal in the human intestine.",
                  "It is the most frequent anaerobe isolated from the clinical specimens",
                  "Non-sporing, gram-positive obligate anaerobe",
                  "Capsular polysaccharide is a major virulence factor"
                ],
                answer: 2,
                explanation: ""
              },

              // ── Leprosy (Mycobacterium leprae) ──
              {
                q: "True about leprosy is:",
                options: [
                  "It is chronic granulomatous disease",
                  "Primarily involves skin, peripheral nerves, upper respiratory tract",
                  "Generation time of the lepra bacilli is 12-13 days",
                  "Incubation period is 5-7 months"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "All are true about multibacillary leprosy, EXCEPT:",
                options: [
                  ">5 skin lesions",
                  "Nerve involvement is seen",
                  "Slit-skin smear positive for lepra bacilli",
                  "Lepromin test positive"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which of the following feature is seen in lepromatous leprosy (LL)?",
                options: [
                  "Bacteriological index 0 to 1+",
                  "Normal humoral immunity",
                  "Hypoesthesia is an early sign",
                  "Lepromin test positive"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "Ridley-Jopling classification (1966) for leprosy includes all varieties, EXCEPT:",
                options: ["Lepromatous leprosy", "Indeterminate leprosy", "Borderline leprosy", "Tuberculoid leprosy"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the following classification of leprosy includes pure neuritic type?",
                options: [
                  "Ridley-Jopling classification",
                  "Madrid classification",
                  "Indian classification",
                  "MacLennan classification"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which of the following leprosy type has the best prognosis?",
                options: ["Lepromatous leprosy", "Tuberculoid leprosy", "Borderline leprosy", "Indeterminate leprosy"],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the following statement is FALSE about lepromatous leprosy?",
                options: [
                  "Globi are seen in the smear",
                  "Skin lesions are many, symmetrical with irregular margin",
                  "Nerve involvement is consistent finding and occurs early",
                  "Cell-mediated immunity is compromised"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "Which of the following statement is FALSE about the skin lesion seen in tuberculoid leprosy (TT)?",
                options: [
                  "One or few skin asymmetrical lesions seen",
                  "Multiple bacilli are seen in slit skin smear",
                  "Lesions appear as hypopigmented, annular macules with elevated borders",
                  "Tendency towards central clearing"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the following statement is FALSE about tuberculoid leprosy (TT)?",
                options: [
                  "Cell-mediated immunity is adequate",
                  "Lepromin test is negative",
                  "Humoral immune response is normal",
                  "Patients are least infectious"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "Which of the following leprosy stage denotes the early unstable cases with one or two hypopigmented macules and definite sensory impairment; however, the lesions are bacteriologically negative?",
                options: ["Lepromatous leprosy", "Tuberculoid leprosy", "Borderline leprosy", "Indeterminate leprosy"],
                answer: 3,
                explanation: ""
              },
              {
                q: "Which one of the following is the most common mode of transmission of leprosy?",
                options: [
                  "Nasal droplet infection",
                  "Direct person to person contact",
                  "Fomites such as clothes and linens",
                  "Procedures like tattooing"
                ],
                answer: 0,
                explanation: ""
              },
              {
                q: "All of the following are true about type 1 lepra reaction, EXCEPT:",
                options: [
                  "Seen in borderline leprosy",
                  "Type III (immune complex-mediated) reaction",
                  "Manifests as Inflammation of previous lesions, new skin lesions and neuritis",
                  "Glucocorticoids are drugs of choice to treat"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "All the statements are TRUE regarding Lepra reaction typeII, EXCEPT:",
                options: [
                  "Seen with lepromatous leprosy",
                  "Predominant TH2 response seen",
                  "Crops of painful erythematous papules which become nodular",
                  "It usually gets subsided after the start of chemotherapy"
                ],
                answer: 3,
                explanation: ""
              },
              {
                q: "True about transmission of leprosy is:",
                options: [
                  "Nearly 80% spouses of infected persons develop leprosy",
                  "Intimate and prolonged contact is necessary",
                  "Being transmitted through respiratory route, leprosy is highly communicable",
                  "Children have good innate immunity and are disease is uncommon if infection is contacted"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "All statements are true regarding specimen collection for leprosy, EXCEPT:",
                options: [
                  "Slit skin smear is the technique is commonly used",
                  "Total six samples are collected",
                  "Nasopharyngeal swabs are recommended.",
                  "Nasal blow specimen is collected in the early morning"
                ],
                answer: 2,
                explanation: ""
              },
              {
                q: "In a slit skin smear for leprosy, the percentage of uniformly stained bacilli out of the total number of bacilli counted is called as:",
                options: [
                  "Bacteriological index",
                  "Morphological index",
                  "Solid, fragmented granular rod percentage",
                  "Percentage grade of the smear"
                ],
                answer: 1,
                explanation: ""
              },
              {
                q: "Advantages of cultivating Mycobacterium leprae in foot pads of mouse is all, EXCEPT:",
                options: [
                  "Faster, takes 2-3 weeks of time",
                  "Useful in detecting drug resistance",
                  "Evaluating the potency of drugs",
                  "Detects viability of the bacilli"
                ],
                answer: 0,
                explanation: ""
              }
            ]
          }
        }
      },
      paper2: {
        name: "Paper 2",
        enabled: false,
        chapters: {}
      }
    }
  },

  patho: {
    name: "Pathology",
    emoji: "🧪",
    enabled: false,
    papers: {}
  },

  pharma: {
    name: "Pharmacology",
    emoji: "💊",
    enabled: false,
    papers: {}
  }
};
