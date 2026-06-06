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
