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
            questions: []
          },
          "git-hepatobiliary": {
            name: "GIT & Hepatobiliary",
            emoji: "🩺",
            questions: []
          },
          "skin-soft-tissue": {
            name: "Skin & Soft Tissue",
            emoji: "🧫",
            questions: []
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
