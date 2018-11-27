--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.8
-- Dumped by pg_dump version 9.6.8

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: admin; Type: TABLE; Schema: public; Owner: fanchovh
--

CREATE TABLE public.admin (
    id integer NOT NULL,
    "user" text,
    hashpwd text,
    userid integer
);


ALTER TABLE public.admin OWNER TO fanchovh;

--
-- Name: admin_id_seq; Type: SEQUENCE; Schema: public; Owner: fanchovh
--

CREATE SEQUENCE public.admin_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.admin_id_seq OWNER TO fanchovh;

--
-- Name: admin_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fanchovh
--

ALTER SEQUENCE public.admin_id_seq OWNED BY public.admin.id;


--
-- Name: cart; Type: TABLE; Schema: public; Owner: fanchovh
--

CREATE TABLE public.cart (
    id integer NOT NULL,
    total numeric NOT NULL,
    products character varying,
    sessid character varying,
    total_produits numeric,
    total_fdp numeric,
    userid integer
);


ALTER TABLE public.cart OWNER TO fanchovh;

--
-- Name: cart_id_seq; Type: SEQUENCE; Schema: public; Owner: fanchovh
--

CREATE SEQUENCE public.cart_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cart_id_seq OWNER TO fanchovh;

--
-- Name: cart_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fanchovh
--

ALTER SEQUENCE public.cart_id_seq OWNED BY public.cart.id;


--
-- Name: cart_total_seq; Type: SEQUENCE; Schema: public; Owner: fanchovh
--

CREATE SEQUENCE public.cart_total_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cart_total_seq OWNER TO fanchovh;

--
-- Name: cart_total_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fanchovh
--

ALTER SEQUENCE public.cart_total_seq OWNED BY public.cart.total;


--
-- Name: collection; Type: TABLE; Schema: public; Owner: fanchovh
--

CREATE TABLE public.collection (
    id integer NOT NULL,
    name text NOT NULL,
    desc_collection text NOT NULL
);


ALTER TABLE public.collection OWNER TO fanchovh;

--
-- Name: collection_id_seq; Type: SEQUENCE; Schema: public; Owner: fanchovh
--

CREATE SEQUENCE public.collection_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.collection_id_seq OWNER TO fanchovh;

--
-- Name: collection_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fanchovh
--

ALTER SEQUENCE public.collection_id_seq OWNED BY public.collection.id;


--
-- Name: commande; Type: TABLE; Schema: public; Owner: fanchovh
--

CREATE TABLE public.commande (
    id integer NOT NULL,
    mode character varying,
    amount numeric,
    cardtype character varying,
    number character varying,
    expirationdate character varying,
    transactionid character varying,
    status character varying,
    userid integer,
    reference numeric
);


ALTER TABLE public.commande OWNER TO fanchovh;

--
-- Name: commande_id_seq; Type: SEQUENCE; Schema: public; Owner: fanchovh
--

CREATE SEQUENCE public.commande_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.commande_id_seq OWNER TO fanchovh;

--
-- Name: commande_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fanchovh
--

ALTER SEQUENCE public.commande_id_seq OWNED BY public.commande.id;


--
-- Name: informations; Type: TABLE; Schema: public; Owner: fanchovh
--

CREATE TABLE public.informations (
    nomentreprise character varying NOT NULL,
    adresse character varying NOT NULL,
    siret character varying NOT NULL,
    sirene character varying NOT NULL,
    ape character varying NOT NULL
);


ALTER TABLE public.informations OWNER TO fanchovh;

--
-- Name: livraison; Type: TABLE; Schema: public; Owner: fanchovh
--

CREATE TABLE public.livraison (
    id integer NOT NULL,
    livr_mode text NOT NULL,
    livr_nom text NOT NULL,
    livr_adresse text NOT NULL,
    livr_ville text NOT NULL,
    livr_postal text NOT NULL,
    userid integer
);


ALTER TABLE public.livraison OWNER TO fanchovh;

--
-- Name: livraison_id_seq; Type: SEQUENCE; Schema: public; Owner: fanchovh
--

CREATE SEQUENCE public.livraison_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.livraison_id_seq OWNER TO fanchovh;

--
-- Name: livraison_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fanchovh
--

ALTER SEQUENCE public.livraison_id_seq OWNED BY public.livraison.id;


--
-- Name: product; Type: TABLE; Schema: public; Owner: fanchovh
--

CREATE TABLE public.product (
    id integer NOT NULL,
    nom text NOT NULL,
    prix integer NOT NULL,
    "nbColors" integer,
    "collectionId" integer NOT NULL,
    modele integer,
    performance integer,
    packaging integer
);


ALTER TABLE public.product OWNER TO fanchovh;

--
-- Name: product_colors; Type: TABLE; Schema: public; Owner: fanchovh
--

CREATE TABLE public.product_colors (
    nbcolors integer NOT NULL,
    prixcolors double precision,
    prixcolorsclient numeric
);


ALTER TABLE public.product_colors OWNER TO fanchovh;

--
-- Name: product_essences; Type: TABLE; Schema: public; Owner: fanchovh
--

CREATE TABLE public.product_essences (
    essence character varying,
    prixessence numeric,
    descessence character varying,
    poidsessencem2 numeric,
    prixessenceclient numeric
);


ALTER TABLE public.product_essences OWNER TO fanchovh;

--
-- Name: product_id_seq; Type: SEQUENCE; Schema: public; Owner: fanchovh
--

CREATE SEQUENCE public.product_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.product_id_seq OWNER TO fanchovh;

--
-- Name: product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fanchovh
--

ALTER SEQUENCE public.product_id_seq OWNED BY public.product.id;


--
-- Name: product_modele; Type: TABLE; Schema: public; Owner: fanchovh
--

CREATE TABLE public.product_modele (
    cellules integer NOT NULL,
    coef double precision,
    taillecellules integer,
    longueur numeric,
    largeur numeric
);


ALTER TABLE public.product_modele OWNER TO fanchovh;

--
-- Name: product_packaging; Type: TABLE; Schema: public; Owner: fanchovh
--

CREATE TABLE public.product_packaging (
    fraisdeport numeric NOT NULL,
    carton numeric,
    papierbulle numeric,
    dimensions character varying,
    prix_carton numeric
);


ALTER TABLE public.product_packaging OWNER TO fanchovh;

--
-- Name: product_performances; Type: TABLE; Schema: public; Owner: fanchovh
--

CREATE TABLE public.product_performances (
    type integer NOT NULL,
    frequence text NOT NULL,
    classement text NOT NULL,
    graph text NOT NULL,
    desc_product text NOT NULL,
    prof numeric,
    surface numeric,
    taillecellule numeric,
    longueur numeric,
    largeur numeric,
    nbpieces numeric,
    nbcarreaux numeric,
    nbcellules numeric
);


ALTER TABLE public.product_performances OWNER TO fanchovh;

--
-- Name: product_prof; Type: TABLE; Schema: public; Owner: fanchovh
--

CREATE TABLE public.product_prof (
    profondeur integer,
    surface numeric,
    performance integer
);


ALTER TABLE public.product_prof OWNER TO fanchovh;

--
-- Name: promo; Type: TABLE; Schema: public; Owner: fanchovh
--

CREATE TABLE public.promo (
    code character varying,
    reduction numeric
);


ALTER TABLE public.promo OWNER TO fanchovh;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sessions (
    sid character varying(255) NOT NULL,
    sess json NOT NULL,
    expired timestamp with time zone NOT NULL
);


ALTER TABLE public.sessions OWNER TO postgres;

--
-- Name: user; Type: TABLE; Schema: public; Owner: fanchovh
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    sessid text NOT NULL,
    nom text,
    prenom text,
    adresse text,
    ville text,
    postal text,
    mail text,
    telephone text,
    contexte text
);


ALTER TABLE public."user" OWNER TO fanchovh;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: fanchovh
--

CREATE SEQUENCE public.user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO fanchovh;

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fanchovh
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- Name: admin id; Type: DEFAULT; Schema: public; Owner: fanchovh
--

ALTER TABLE ONLY public.admin ALTER COLUMN id SET DEFAULT nextval('public.admin_id_seq'::regclass);


--
-- Name: cart id; Type: DEFAULT; Schema: public; Owner: fanchovh
--

ALTER TABLE ONLY public.cart ALTER COLUMN id SET DEFAULT nextval('public.cart_id_seq'::regclass);


--
-- Name: cart total; Type: DEFAULT; Schema: public; Owner: fanchovh
--

ALTER TABLE ONLY public.cart ALTER COLUMN total SET DEFAULT nextval('public.cart_total_seq'::regclass);


--
-- Name: collection id; Type: DEFAULT; Schema: public; Owner: fanchovh
--

ALTER TABLE ONLY public.collection ALTER COLUMN id SET DEFAULT nextval('public.collection_id_seq'::regclass);


--
-- Name: commande id; Type: DEFAULT; Schema: public; Owner: fanchovh
--

ALTER TABLE ONLY public.commande ALTER COLUMN id SET DEFAULT nextval('public.commande_id_seq'::regclass);


--
-- Name: livraison id; Type: DEFAULT; Schema: public; Owner: fanchovh
--

ALTER TABLE ONLY public.livraison ALTER COLUMN id SET DEFAULT nextval('public.livraison_id_seq'::regclass);


--
-- Name: product id; Type: DEFAULT; Schema: public; Owner: fanchovh
--

ALTER TABLE ONLY public.product ALTER COLUMN id SET DEFAULT nextval('public.product_id_seq'::regclass);


--
-- Name: user id; Type: DEFAULT; Schema: public; Owner: fanchovh
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- Data for Name: admin; Type: TABLE DATA; Schema: public; Owner: fanchovh
--

COPY public.admin (id, "user", hashpwd, userid) FROM stdin;
1	fanch44@hotmail.com	\N	\N
2	fanch44@hotmail.com	\N	\N
3	berna@g.fr	\N	\N
4	ddd@hu.fr	\N	\N
5	fff@gh.fr	\N	\N
6	v@gfr.fr	\N	\N
\.


--
-- Name: admin_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fanchovh
--

SELECT pg_catalog.setval('public.admin_id_seq', 6, true);


--
-- Data for Name: cart; Type: TABLE DATA; Schema: public; Owner: fanchovh
--

COPY public.cart (id, total, products, sessid, total_produits, total_fdp, userid) FROM stdin;
1	150	{"{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":3}"}	\N	\N	\N	\N
2	372	{"{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":3}","{\\"name\\":\\"Chêne-7\\",\\"price\\":78,\\"fdp\\":3,\\"qty\\":2}","{\\"name\\":\\"Wenge-7\\",\\"price\\":66,\\"fdp\\":3,\\"qty\\":1}"}	\N	\N	\N	\N
3	1	{"{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":3}","{\\"name\\":\\"Chêne-7\\",\\"price\\":78,\\"fdp\\":3,\\"qty\\":2}","{\\"name\\":\\"Wenge-7\\",\\"price\\":66,\\"fdp\\":3,\\"qty\\":1}"}	\N	\N	\N	\N
4	2	{"{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":3}","{\\"name\\":\\"Chêne-7\\",\\"price\\":78,\\"fdp\\":3,\\"qty\\":2}","{\\"name\\":\\"Wenge-7\\",\\"price\\":66,\\"fdp\\":3,\\"qty\\":1}"}	\N	\N	\N	\N
5	3	{}	shzx5h6kSNEEdiVseL2AxOlLSzWnIb_z	\N	\N	\N
6	244	{"{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":2}","{\\"name\\":\\"Wenge-7\\",\\"price\\":66,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Teck-7\\",\\"price\\":78,\\"fdp\\":3,\\"qty\\":1}"}	d7vmkcTxyvNubq5eNcQ2F-YLHtT8adeT	\N	\N	\N
7	4	{"{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":2}","{\\"name\\":\\"Wenge-7\\",\\"price\\":66,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Teck-7\\",\\"price\\":78,\\"fdp\\":3,\\"qty\\":1}"}	sZmc-bXz8vZrJx1D2dsCpNLNCumRO5t2	\N	\N	\N
8	85	{"{\\"name\\":\\"Mario-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":4}"}	WHvcsjOUEJV4uQCb0ACQfpjh2NRSjecL	\N	\N	\N
9	700	{"{\\"name\\":\\"Giant-Headphone-DIF6\\",\\"price\\":350,\\"fdp\\":3,\\"qty\\":2}"}	DrTW8O8eMTUj5tFB3gdKUH3spiUTgfvs	\N	\N	\N
12	5	{"{\\"name\\":\\"Giant-Headphone-DIF6\\",\\"price\\":350,\\"fdp\\":3,\\"qty\\":3}","{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":7}","{\\"qty\\":1}"}	IvZv3irPE__vO9Vmv13noWv88YdS_AGJ	\N	\N	\N
13	6	{"{\\"name\\":\\"Giant-Headphone-DIF6\\",\\"price\\":350,\\"fdp\\":3,\\"qty\\":3}","{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":7}","{\\"qty\\":1}"}	dtlbqkhZjDOKcLHyU0GaEWFpl7NYHSR4	\N	\N	\N
14	7	{"{\\"name\\":\\"Giant-Headphone-DIF6\\",\\"price\\":350,\\"fdp\\":3,\\"qty\\":3}","{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":7}","{\\"qty\\":1}"}	FsrQy5uKHFp9cklT5JLWQRj3qy2bpcq7	\N	\N	\N
15	8	{"{\\"name\\":\\"Giant-Headphone-DIF6\\",\\"price\\":350,\\"fdp\\":3,\\"qty\\":3}","{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":7}","{\\"qty\\":1}"}	fPhHa7lwUCaMiY-oLPJVEkEW1P4RSCrX	\N	\N	\N
16	9	{"{\\"name\\":\\"Giant-Headphone-DIF6\\",\\"price\\":350,\\"fdp\\":3,\\"qty\\":3}","{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":7}","{\\"qty\\":1}"}	-xAvJ9ak8K2fdw_Xx1sSsxjMPiLGJTZa	\N	\N	\N
21	427	{"{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":3}","{\\"name\\":\\"Woodik-7\\",\\"price\\":55,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Teck-7\\",\\"price\\":78,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Wenge-7\\",\\"price\\":66,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Chêne-7\\",\\"price\\":78,\\"fdp\\":3,\\"qty\\":1}"}	BY9xeRSapS0OGN5VE6UXerQFz4sqFe4v	\N	\N	\N
22	183	{"{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Teck-7\\",\\"price\\":78,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Woodik-7\\",\\"price\\":55,\\"fdp\\":3,\\"qty\\":1}"}	mbZhvZGpAe0s8LwgqVQazMZnQOTetQP9	\N	\N	\N
23	10	{"{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":3}"}	BhbWa5A2i1X0CeOEfTVF4uhtHCBdIJ5G	159	\N	\N
24	11	{"{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":3}"}	zDuHzWi3FX16v6DWWI5hjDh365uNvaw8	\N	\N	\N
25	551	{"{\\"name\\":\\"Teck-7\\",\\"price\\":78,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Woodik-7\\",\\"price\\":55,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Liseron Bleu-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Romal-7\\",\\"price\\":78,\\"fdp\\":3,\\"qty\\":4}"}	I-_-TWGQY3IdmqAEYgBgSS9LQGvdcP5b	551	21	\N
26	12	{"{\\"name\\":\\"Teck-7\\",\\"price\\":78,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Woodik-7\\",\\"price\\":55,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Liseron Bleu-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Romal-7\\",\\"price\\":78,\\"fdp\\":3,\\"qty\\":4}"}	CUbK32X_Tt489GCZVXFSTlyePWuc7qe8	\N	\N	\N
27	192	{"{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Teck-7\\",\\"price\\":78,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Woodik-7\\",\\"price\\":55,\\"fdp\\":3,\\"qty\\":1}"}	sDXp4KYALDR4WHYETMC_OcgLzGy99RJw	183	9	\N
28	122	{"{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Wenge-7\\",\\"price\\":66,\\"fdp\\":3,\\"qty\\":1}"}	PIGZgUyIJmRyBzQr8BmD8hsF7Qk4iEhF	116	6	\N
29	150	{"{\\"name\\":\\"Wenge-7\\",\\"price\\":66,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Chêne-7\\",\\"price\\":78,\\"fdp\\":3,\\"qty\\":1}"}	PIGZgUyIJmRyBzQr8BmD8hsF7Qk4iEhF	144	6	\N
30	159	{"{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":3}"}	PIGZgUyIJmRyBzQr8BmD8hsF7Qk4iEhF	150	9	\N
31	192	{"{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":1}"}	DkHDKwBMmTKlx2tf54NePW1wxxPq_62A	183	9	13
32	192	{"{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":1}"}	DkHDKwBMmTKlx2tf54NePW1wxxPq_62A	183	9	14
33	159	{"{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":1}"}	DkHDKwBMmTKlx2tf54NePW1wxxPq_62A	150	9	15
34	159	{"{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":1}"}	DkHDKwBMmTKlx2tf54NePW1wxxPq_62A	150	9	16
35	159	{"{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":1}"}	DkHDKwBMmTKlx2tf54NePW1wxxPq_62A	150	9	17
36	159	{"{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":1}"}	DkHDKwBMmTKlx2tf54NePW1wxxPq_62A	150	9	18
37	159	{"{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":1}"}	DkHDKwBMmTKlx2tf54NePW1wxxPq_62A	150	9	19
38	192	\N	B1QwrQxauAkZCuQxTCbELgPx9sNNkujS	183	9	20
39	278	{"{\\"name\\":\\"Teck-7\\",\\"price\\":78,\\"fdp\\":3,\\"qty\\":2}"}	B1QwrQxauAkZCuQxTCbELgPx9sNNkujS	266	12	21
40	58	{"{\\"name\\":\\"Teck-7\\",\\"price\\":78,\\"fdp\\":3,\\"qty\\":2}"}	B1QwrQxauAkZCuQxTCbELgPx9sNNkujS	55	3	22
41	53	{"{\\"name\\":\\"Teck-7\\",\\"price\\":78,\\"fdp\\":3,\\"qty\\":2}"}	B1QwrQxauAkZCuQxTCbELgPx9sNNkujS	50	3	23
42	53	{"{\\"name\\":\\"Teck-7\\",\\"price\\":78,\\"fdp\\":3,\\"qty\\":2}"}	B1QwrQxauAkZCuQxTCbELgPx9sNNkujS	50	3	24
43	53	{"{\\"name\\":\\"Teck-7\\",\\"price\\":78,\\"fdp\\":3,\\"qty\\":2}"}	B1QwrQxauAkZCuQxTCbELgPx9sNNkujS	50	3	25
44	106	\N	wxjke2PSX_uJY0hzWUqCOhgmsvNo8Ac8	100	6	26
45	500	{"{\\"name\\":\\"Snake-7\\",\\"price\\":78,\\"fdp\\":3,\\"qty\\":1}"}	92-pCoE4PrNPfSIYq2t6fNY4jG2qHIzp	482	18	27
46	270	{"{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":1}"}	92-pCoE4PrNPfSIYq2t6fNY4jG2qHIzp	255	15	28
47	192	{"{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":1}"}	92-pCoE4PrNPfSIYq2t6fNY4jG2qHIzp	183	9	29
48	342	{"{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":1}"}	92-pCoE4PrNPfSIYq2t6fNY4jG2qHIzp	327	15	30
49	116	{"{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":1}"}	92-pCoE4PrNPfSIYq2t6fNY4jG2qHIzp	110	6	31
50	116	{"{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":1}"}	92-pCoE4PrNPfSIYq2t6fNY4jG2qHIzp	110	6	32
51	53	{"{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":1}"}	92-pCoE4PrNPfSIYq2t6fNY4jG2qHIzp	50	3	33
52	106	{"{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":1}"}	92-pCoE4PrNPfSIYq2t6fNY4jG2qHIzp	100	6	34
53	298	\N	M7bjjXnJh4RtCe9u0BSsCwLl_tmnzh8o	283	15	35
54	164	\N	M7bjjXnJh4RtCe9u0BSsCwLl_tmnzh8o	155	9	36
55	384	{"{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":2}","{\\"name\\":\\"Woodik-7\\",\\"price\\":55,\\"fdp\\":3,\\"qty\\":1}"}	M7bjjXnJh4RtCe9u0BSsCwLl_tmnzh8o	366	18	37
56	208	{"{\\"name\\":\\"Wenge-7\\",\\"price\\":66,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Teck-7\\",\\"price\\":78,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Woodik-7\\",\\"price\\":55,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Liseron Bleu-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Lichen-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":1}"}	2a5WBVFFsAx27yC-5TnV57dQPI3T1kZ_	199	9	38
57	245	{"{\\"name\\":\\"Wenge-7\\",\\"price\\":66,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Teck-7\\",\\"price\\":78,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Woodik-7\\",\\"price\\":55,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Liseron Bleu-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Lichen-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":1}"}	2a5WBVFFsAx27yC-5TnV57dQPI3T1kZ_	233	12	39
58	53	{"{\\"name\\":\\"Wenge-7\\",\\"price\\":66,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Teck-7\\",\\"price\\":78,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Woodik-7\\",\\"price\\":55,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Liseron Bleu-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Lichen-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":1}"}	2a5WBVFFsAx27yC-5TnV57dQPI3T1kZ_	50	3	40
59	106	{"{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":1}"}	2a5WBVFFsAx27yC-5TnV57dQPI3T1kZ_	100	6	41
60	106	{"{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":1}"}	2a5WBVFFsAx27yC-5TnV57dQPI3T1kZ_	100	6	42
61	106	{"{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":1}"}	2a5WBVFFsAx27yC-5TnV57dQPI3T1kZ_	100	6	43
62	106	{"{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":1}"}	2a5WBVFFsAx27yC-5TnV57dQPI3T1kZ_	100	6	44
63	164	\N	2ZAOPKPBgV5NWkAjSFne7i3IV4eWNoPW	155	9	45
64	106	\N	2ZAOPKPBgV5NWkAjSFne7i3IV4eWNoPW	100	6	46
65	53	\N	2ZAOPKPBgV5NWkAjSFne7i3IV4eWNoPW	50	3	47
66	106	\N	2ZAOPKPBgV5NWkAjSFne7i3IV4eWNoPW	100	6	48
67	53	\N	2ZAOPKPBgV5NWkAjSFne7i3IV4eWNoPW	50	3	49
68	53	\N	2ZAOPKPBgV5NWkAjSFne7i3IV4eWNoPW	50	3	50
69	53	{"{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":2}"}	2ZAOPKPBgV5NWkAjSFne7i3IV4eWNoPW	50	3	51
70	260.32	{"{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":2}","{\\"name\\":\\"Chêne-7\\",\\"price\\":78,\\"fdp\\":3,\\"qty\\":2}"}	VTT-mcaLzQexkfbrhC5f-BKvD7NzdzXJ	256	12	52
71	88	{"{\\"name\\":\\"Lichen-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":1}"}	8w14FB6aT9K8Mwg2_yRBcHwf9t24_NTP	85	3	53
72	141	{"{\\"name\\":\\"Lichen-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":1}"}	8w14FB6aT9K8Mwg2_yRBcHwf9t24_NTP	135	6	54
73	414	{"{\\"name\\":\\"Pack 5 Klassik\\",\\"price\\":240,\\"fdp\\":12,\\"qty\\":1}","{\\"name\\":\\"Invader-7\\",\\"price\\":78,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Teck-7\\",\\"price\\":78,\\"fdp\\":3,\\"qty\\":1}"}	cmLKq2fT2nmG3c8xofUiu1H6qdLcJ_GM	396	18	55
74	675	{"{\\"name\\":\\"Pack 5 Klassik\\",\\"price\\":240,\\"fdp\\":12,\\"qty\\":1}","{\\"name\\":\\"Invader-7\\",\\"price\\":78,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Teck-7\\",\\"price\\":78,\\"fdp\\":3,\\"qty\\":2}","{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Woodik-7\\",\\"price\\":55,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Wenge-7\\",\\"price\\":66,\\"fdp\\":3,\\"qty\\":1}"}	cmLKq2fT2nmG3c8xofUiu1H6qdLcJ_GM	645	30	56
75	728	{"{\\"name\\":\\"Pack 5 Klassik\\",\\"price\\":240,\\"fdp\\":12,\\"qty\\":1}","{\\"name\\":\\"Invader-7\\",\\"price\\":78,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Teck-7\\",\\"price\\":78,\\"fdp\\":3,\\"qty\\":2}","{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":2}","{\\"name\\":\\"Woodik-7\\",\\"price\\":55,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Wenge-7\\",\\"price\\":66,\\"fdp\\":3,\\"qty\\":1}"}	cmLKq2fT2nmG3c8xofUiu1H6qdLcJ_GM	695	33	57
76	516	{"{\\"name\\":\\"Lichen-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":4}","{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":2}","{\\"name\\":\\"Woodik-7\\",\\"price\\":55,\\"fdp\\":3,\\"qty\\":1}"}	t8udfDynH-VGTI7ZbarlQQoS0nd8spbE	495	21	58
77	569	{"{\\"name\\":\\"Lichen-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":4}","{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":3}","{\\"name\\":\\"Woodik-7\\",\\"price\\":55,\\"fdp\\":3,\\"qty\\":1}"}	t8udfDynH-VGTI7ZbarlQQoS0nd8spbE	545	24	59
78	569	{"{\\"name\\":\\"Lichen-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":4}","{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":3}","{\\"name\\":\\"Woodik-7\\",\\"price\\":55,\\"fdp\\":3,\\"qty\\":1}"}	t8udfDynH-VGTI7ZbarlQQoS0nd8spbE	545	24	60
79	569	{"{\\"name\\":\\"Lichen-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":4}","{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":3}","{\\"name\\":\\"Woodik-7\\",\\"price\\":55,\\"fdp\\":3,\\"qty\\":1}"}	t8udfDynH-VGTI7ZbarlQQoS0nd8spbE	545	24	61
80	569	{"{\\"name\\":\\"Lichen-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":4}","{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":3}","{\\"name\\":\\"Woodik-7\\",\\"price\\":55,\\"fdp\\":3,\\"qty\\":1}"}	t8udfDynH-VGTI7ZbarlQQoS0nd8spbE	545	24	62
81	569	{"{\\"name\\":\\"Lichen-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":4}","{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":3}","{\\"name\\":\\"Woodik-7\\",\\"price\\":55,\\"fdp\\":3,\\"qty\\":1}"}	t8udfDynH-VGTI7ZbarlQQoS0nd8spbE	545	24	63
82	475.93	{"{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":2}","{\\"name\\":\\"Woodik-7\\",\\"price\\":55,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Teck-7\\",\\"price\\":78,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Wenge-7\\",\\"price\\":66,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Lichen-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Liseron Bleu-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":1}"}	LAKvXMtNUgMPHaEQJ9Sx6R7KM3SIEf9b	469	21	64
83	342	{"{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Teck-7\\",\\"price\\":78,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Woodik-7\\",\\"price\\":55,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Wenge-7\\",\\"price\\":66,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Chêne-7\\",\\"price\\":78,\\"fdp\\":3,\\"qty\\":1}"}	HgTVEYZA6KNMTxHtyCbc1WR2hnOxoa1j	327	15	65
84	342	{"{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Teck-7\\",\\"price\\":78,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Woodik-7\\",\\"price\\":55,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Wenge-7\\",\\"price\\":66,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Chêne-7\\",\\"price\\":78,\\"fdp\\":3,\\"qty\\":1}"}	HgTVEYZA6KNMTxHtyCbc1WR2hnOxoa1j	327	15	66
85	1143	{"{\\"name\\":\\"Pack 10 Woodik\\",\\"price\\":516,\\"fdp\\":24,\\"qty\\":2}","{\\"name\\":\\"Quadrablack\\",\\"price\\":60,\\"fdp\\":3,\\"qty\\":1}"}	Z9Lm1jZARr3XedwVl5FwyV1cAyw_dAbg	1092	51	67
86	245	{"{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":2}","{\\"name\\":\\"Teck-7\\",\\"price\\":78,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Woodik-7\\",\\"price\\":55,\\"fdp\\":3,\\"qty\\":1}"}	7LxSVFEVhlHqSiPNX622ZZu8cNzKFDXf	233	12	68
87	706	{"{\\"name\\":\\"Giant-K7-DIF6\\",\\"price\\":350,\\"fdp\\":3,\\"qty\\":2}"}	ZEdmgef5gmNoZxQi79B4tShVCJsPYSNq	700	6	69
88	353	{"{\\"name\\":\\"Giant-Headphone-DIF6\\",\\"price\\":350,\\"fdp\\":3,\\"qty\\":1}"}	ecctNXrIO73aObBwzR7XxxBoaD-GXxnr	350	3	70
89	353	{"{\\"name\\":\\"Giant-Headphone-DIF6\\",\\"price\\":350,\\"fdp\\":3,\\"qty\\":1}"}	ecctNXrIO73aObBwzR7XxxBoaD-GXxnr	350	3	71
90	353	{"{\\"name\\":\\"Giant-Headphone-DIF6\\",\\"price\\":350,\\"fdp\\":3,\\"qty\\":1}"}	rYWohSMFxk4kcp9JJfISF4218HwQycX2	350	3	72
91	353	{"{\\"name\\":\\"Giant-Headphone-DIF6\\",\\"price\\":350,\\"fdp\\":3,\\"qty\\":1}"}	H-3ZCP428D6e99Pmoa-PxKCNhJNzgL_F	350	3	73
92	157	{"{\\"name\\":\\"Wenge-7\\",\\"price\\":66,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Anemone-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":1}"}	AzWCYK9lEgkg3w9vBpQZswwXAjH64qEl	151	6	74
93	157	{"{\\"name\\":\\"Wenge-7\\",\\"price\\":66,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Anemone-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":1}"}	AzWCYK9lEgkg3w9vBpQZswwXAjH64qEl	151	6	75
94	157	{"{\\"name\\":\\"Wenge-7\\",\\"price\\":66,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Anemone-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":1}"}	AzWCYK9lEgkg3w9vBpQZswwXAjH64qEl	151	6	76
95	303	{"{\\"name\\":\\"Wenge-7\\",\\"price\\":66,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Anemone-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Woodik-7\\",\\"price\\":55,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Liseron Bleu-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":1}"}	AzWCYK9lEgkg3w9vBpQZswwXAjH64qEl	291	12	77
96	303	{"{\\"name\\":\\"Wenge-7\\",\\"price\\":66,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Anemone-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Woodik-7\\",\\"price\\":55,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Liseron Bleu-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":1}"}	AzWCYK9lEgkg3w9vBpQZswwXAjH64qEl	291	12	78
97	303	{"{\\"name\\":\\"Wenge-7\\",\\"price\\":66,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Anemone-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Woodik-7\\",\\"price\\":55,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Liseron Bleu-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":1}"}	AzWCYK9lEgkg3w9vBpQZswwXAjH64qEl	291	12	79
98	303	{"{\\"name\\":\\"Wenge-7\\",\\"price\\":66,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Anemone-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Woodik-7\\",\\"price\\":55,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Liseron Bleu-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":1}"}	AzWCYK9lEgkg3w9vBpQZswwXAjH64qEl	291	12	80
99	356	{"{\\"name\\":\\"Wenge-7\\",\\"price\\":66,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Anemone-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Woodik-7\\",\\"price\\":55,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Liseron Bleu-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":1}"}	AzWCYK9lEgkg3w9vBpQZswwXAjH64qEl	341	15	81
100	356	{"{\\"name\\":\\"Wenge-7\\",\\"price\\":66,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Anemone-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Woodik-7\\",\\"price\\":55,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Liseron Bleu-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":1}"}	AzWCYK9lEgkg3w9vBpQZswwXAjH64qEl	341	15	82
101	472	{"{\\"name\\":\\"Wenge-7\\",\\"price\\":66,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Anemone-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Woodik-7\\",\\"price\\":55,\\"fdp\\":3,\\"qty\\":3}","{\\"name\\":\\"Liseron Bleu-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":1}"}	AzWCYK9lEgkg3w9vBpQZswwXAjH64qEl	451	21	83
102	472	{"{\\"name\\":\\"Wenge-7\\",\\"price\\":66,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Anemone-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Woodik-7\\",\\"price\\":55,\\"fdp\\":3,\\"qty\\":3}","{\\"name\\":\\"Liseron Bleu-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":1}"}	AzWCYK9lEgkg3w9vBpQZswwXAjH64qEl	451	21	84
103	472	{"{\\"name\\":\\"Wenge-7\\",\\"price\\":66,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Anemone-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Woodik-7\\",\\"price\\":55,\\"fdp\\":3,\\"qty\\":3}","{\\"name\\":\\"Liseron Bleu-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":1}"}	AzWCYK9lEgkg3w9vBpQZswwXAjH64qEl	451	21	85
104	472	{"{\\"name\\":\\"Wenge-7\\",\\"price\\":66,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Anemone-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Woodik-7\\",\\"price\\":55,\\"fdp\\":3,\\"qty\\":3}","{\\"name\\":\\"Liseron Bleu-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":1}"}	AzWCYK9lEgkg3w9vBpQZswwXAjH64qEl	451	21	86
105	472	{"{\\"name\\":\\"Wenge-7\\",\\"price\\":66,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Anemone-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Woodik-7\\",\\"price\\":55,\\"fdp\\":3,\\"qty\\":3}","{\\"name\\":\\"Liseron Bleu-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":1}"}	AzWCYK9lEgkg3w9vBpQZswwXAjH64qEl	451	21	87
106	472	{"{\\"name\\":\\"Wenge-7\\",\\"price\\":66,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Anemone-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Woodik-7\\",\\"price\\":55,\\"fdp\\":3,\\"qty\\":3}","{\\"name\\":\\"Liseron Bleu-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":1}"}	AzWCYK9lEgkg3w9vBpQZswwXAjH64qEl	451	21	88
107	472	{"{\\"name\\":\\"Wenge-7\\",\\"price\\":66,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Anemone-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Woodik-7\\",\\"price\\":55,\\"fdp\\":3,\\"qty\\":3}","{\\"name\\":\\"Liseron Bleu-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":1}"}	AzWCYK9lEgkg3w9vBpQZswwXAjH64qEl	451	21	89
108	472	{"{\\"name\\":\\"Wenge-7\\",\\"price\\":66,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Anemone-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Woodik-7\\",\\"price\\":55,\\"fdp\\":3,\\"qty\\":3}","{\\"name\\":\\"Liseron Bleu-7\\",\\"price\\":85,\\"fdp\\":3,\\"qty\\":1}","{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":1}"}	AzWCYK9lEgkg3w9vBpQZswwXAjH64qEl	451	21	90
109	53	{"{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":1}"}	R-dlrW-qIaxPn69GNsDkRWnYFx_gS69Y	50	3	91
110	53	{"{\\"name\\":\\"Klassik-6\\",\\"price\\":50,\\"fdp\\":3,\\"qty\\":1}"}	KAMjMadO0A-xuPdYBNapfJb3fuaXQYsT	50	3	92
\.


--
-- Name: cart_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fanchovh
--

SELECT pg_catalog.setval('public.cart_id_seq', 110, true);


--
-- Name: cart_total_seq; Type: SEQUENCE SET; Schema: public; Owner: fanchovh
--

SELECT pg_catalog.setval('public.cart_total_seq', 12, true);


--
-- Data for Name: collection; Type: TABLE DATA; Schema: public; Owner: fanchovh
--

COPY public.collection (id, name, desc_collection) FROM stdin;
1	Klassik	Le diffuseur standard, simple et efficace !
2	Organik\n	La collection Organik montre des diffuseurs avec des couleurs illustrant le caractère et la robustesse du bois. \nElle s'adresse aux studios de forte personnalité, appréciant les contrastes et les couleurs brunes, chaudes.
3	Botanik	La collection Botanik repose sur les couleurs apaisantes, inspirées de la nature et du jardin.\nLes diffuseurs sont discrets, non-intrusifs et amène une forme de sérénité pour l'esprit et son inspiration.
4	Minimalik	La collection Minimalik est ambitieuse avec un design comtemporain et minimaliste.\nElle s'adapte aux studios qui aiment mélanger rigueur avec quelques pointes de fantaisie.
5	Gamik	La collection Gamik est une référence amusante au monde du jeu vidéo.\nDestinée aux studios ambitieux qui aiment garder de l'energie avec ces références délirantes connues de tous.
6	Giantik\n	Un Pack de 6 diffuseurs de type 7 x 7 cellules a disposer selon un ordre préétabli !
7	Pack-5	Un pack de 5 diffuseurs pour profiter d'une réduction de 4%.
8	Pack-10	Un pack de 10 diffuseurs pour profiter d'une réduction de 6%.
9	Absorbeur	La collection d'absorbeurs Quadratik, sobre et efficce
\.


--
-- Name: collection_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fanchovh
--

SELECT pg_catalog.setval('public.collection_id_seq', 1, false);


--
-- Data for Name: commande; Type: TABLE DATA; Schema: public; Owner: fanchovh
--

COPY public.commande (id, mode, amount, cardtype, number, expirationdate, transactionid, status, userid, reference) FROM stdin;
1	credit_card	10.00	Visa	411111******1111	02/2021	r51s4ns6	submitted_for_settlement	\N	\N
2	credit_card	10.00	Visa	411111******1111	02/2023	48gzb4y7	submitted_for_settlement	\N	\N
3	credit_card	10.00	Visa	411111******1111	02/2024	3ze121zw	submitted_for_settlement	\N	\N
4	credit_card	10.00	Visa	411111******1111	02/2025	8t03wm3q	submitted_for_settlement	\N	\N
5	credit_card	10.00	Visa	411111******1111	07/2024	2xhk32mk	submitted_for_settlement	\N	\N
6	credit_card	10.00	Visa	411111******1111	02/2024	c73f9qfv	submitted_for_settlement	\N	\N
7	credit_card	10.00	Visa	411111******1111	12/2021	kes22jna	submitted_for_settlement	\N	\N
8	credit_card	10.00	Visa	411111******1111	02/2028	ph4jdnf1	submitted_for_settlement	\N	\N
9	credit_card	10.00	Visa	411111******1111	02/2032	9pb2vk5g	submitted_for_settlement	\N	\N
10	credit_card	10.00	Visa	411111******1111	06/2023	h9fhw53h	submitted_for_settlement	\N	\N
11	credit_card	10.00	Visa	411111******1111	08/2023	1jy52pgh	submitted_for_settlement	\N	\N
12	credit_card	10.00	Visa	411111******1111	06/2022	2dchhghh	submitted_for_settlement	\N	\N
13	credit_card	10.00	Visa	411111******1111	02/2019	aaa4q5f3	submitted_for_settlement	\N	\N
14	credit_card	10.00	Visa	411111******1111	02/2019	b602kgtz	submitted_for_settlement	28	\N
15	credit_card	342.00	Visa	411111******1111	02/2019	kx7sqh0p	submitted_for_settlement	30	\N
16	credit_card	116.00	Visa	411111******1111	02/2019	msh233rh	submitted_for_settlement	32	532488
17	credit_card	53.00	Visa	411111******1111	02/2019	8yz3q367	submitted_for_settlement	33	532489
18	credit_card	106.00	Visa	411111******1111	02/2019	6rdavbfk	submitted_for_settlement	34	532490
19	credit_card	208.00	Visa	411111******1111	02/2019	2kpmevsv	submitted_for_settlement	38	532494
20	credit_card	245.00	Visa	411111******1111	02/2019	2hwaa4hq	submitted_for_settlement	39	532495
21	credit_card	53.00	Visa	411111******1111	02/2019	qkpx8fn5	submitted_for_settlement	40	532496
22	credit_card	106.00	Visa	411111******1111	02/2019	cde3z46w	submitted_for_settlement	41	532497
23	credit_card	106.00	Visa	411111******1111	12/2019	4s4yxsk6	submitted_for_settlement	42	532498
\.


--
-- Name: commande_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fanchovh
--

SELECT pg_catalog.setval('public.commande_id_seq', 23, true);


--
-- Data for Name: informations; Type: TABLE DATA; Schema: public; Owner: fanchovh
--

COPY public.informations (nomentreprise, adresse, siret, sirene, ape) FROM stdin;
Quadratik.fr	Lieu dit La Giraudais 35520 La Mezière	83529797900014	835297979	1629Z
\.


--
-- Data for Name: livraison; Type: TABLE DATA; Schema: public; Owner: fanchovh
--

COPY public.livraison (id, livr_mode, livr_nom, livr_adresse, livr_ville, livr_postal, userid) FROM stdin;
1	autreAdresse	Mr Bernard Campan	hhhhh	hhhhhhhhh	hhhhhhhh	\N
2	relais					\N
3	autreAdresse	gfff	gddsss	gghjjj	35421	\N
4	relais					\N
5	relais					\N
6	relais					\N
7	relais					\N
8	relais					\N
9	relais					\N
10	domicile					\N
11	domicile					\N
12	relais					\N
13	relais					\N
14	relais					\N
15	relais					\N
16	relais					\N
17	relais					\N
18	relais					\N
19	relais					\N
20	autreAdresse	Fanch Cavellec	Lieu dit La giraudais	La Mezière	35520	27
21	autreAdresse	Mr Bernard Campan	gddsss	gghjjj	35520	37
22	autreAdresse	Mr Bernard Campan	gddsss	gghjjj	35520	37
23	autreAdresse	Mr Bernard Campan2	gddsss	gghjjj	35520	37
24	autreAdresse	Mr Bernard Campan2	hhhhh	gghjjj	25450	37
25	autreAdresse	Fanch Cavellec	Lieu dit La giraudais	La Mezière	35520	38
26	autreAdresse	Fanch Cavellec	hhhhh	La Mezière	35520	39
27	autreAdresse	Fanch Cavellec	gddsss	gghjjj	35522	40
28	autreAdresse	Mr Bernard Campan2	Lieu dit La giraudais	La Mezière	35524	41
29	autreAdresse	Mr Bernard Campan2	Lieu dit La giraudais	gghjjj	35527	42
30	autreAdresse	Fanch Cavellec	hhhhh	gghjjj	25454	43
31	domicile	essaifhg	ddd	ddd	35500	44
32	domicile	gfgdfgqfg	fg	fgj	35520	44
33	autreAdresse	Mr Bernard Campan2	hhhhh	gghjjj	35520	44
34	autreAdresse	Mr Bernard Campan2	hhhhh	gghjjj	35520	44
35	autreAdresse	Mr Bernard Campan2	gddsss	gghjjj	25454	44
36	autreAdresse	Mr Bernard Campan2	hhhhh	hhhhhhhhh	35520	44
37	domicile	gfgdfgqfg	fg	fgj	35520	44
38	domicile	gfgdfgqfg	fg	fgj	35520	44
39	domicile	gfgdfgqfg	fg	fgj	35520	44
40	domicile	gfgdfgqfg	fg	fgj	35520	44
41	domicile	gfgdfgqfg	fg	fgj	35520	\N
42	domicile	gfgdfgqfg	fg	fgj	35520	\N
43	domicile	gfgdfgqfg	fg	fgj	35520	\N
44	domicile	gfgdfgqfg	fg	fgj	35520	\N
45	domicile	essaidffs	ddd	fgj	35420	47
46	domicile	Cavellecfhg	fgj	fgj	35420	67
47	domicile	CavellecFanch	Lieu dit La giraudais	La Mezière	35520	68
48	domicile	CARDUCCIO Vincenzo	32 rue des fleurs	Petite Rosselle	57540	70
49	domicile	Carduccio Vincenzo 	32 rue des fleurs	Petite Rosselle	57540	72
50	domicile	Carduccio Vincenzo 	32 rue des fleurs 	Petite Rosselle 	57540	73
51	domicile	huhu	hu	hu	35520	90
52	domicile	huhuhuh	hu	huuh	25452	90
53	autreAdresse	uhuh	uhuh	uhuh	25452	90
54	autreAdresse	Geradr	rue	PAris	98567	\N
55	autreAdresse	pardon	ohcava	OUioui	65896	\N
56	autreAdresse	a	a	a	78569	\N
\.


--
-- Name: livraison_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fanchovh
--

SELECT pg_catalog.setval('public.livraison_id_seq', 56, true);


--
-- Data for Name: product; Type: TABLE DATA; Schema: public; Owner: fanchovh
--

COPY public.product (id, nom, prix, "nbColors", "collectionId", modele, performance, packaging) FROM stdin;
18	Giant-Headphone-DIF6	350	2	6	7	716	3
17	Giant-K7-DIF6	350	3	6	7	716	3
23	Pack 10 Woodik	516	0	8	7	71	24
22	Pack 5 Woodik	264	0	7	7	71	12
24	Pack 10 Klassik	480	0	8	6	61	24
25	Pack 5 Klassik	240	0	7	6	61	12
26	Quadrablack	60	1	9	6	1	3
1	Woodik-7	55	0	2	7	71	3
7	Snake-7	78	2	5	7	71	3
6	Spaceship-7	78	2	5	7	71	3
5	Teck-7	78	2	2	7	71	3
4	Wenge-7	66	1	2	7	71	3
11	Liseron Bleu-7	85	3	3	7	71	3
10	Mario-7	85	3	5	7	71	3
9	Orelo-7	78	2	4	7	71	3
8	Romal-7	78	2	4	7	71	3
15	Invader-7	78	2	5	7	71	3
14	Klassik-6	50	0	1	6	61	3
13	Klio-7	58	3	4	7	71	3
12	Lichen-7	85	3	3	7	71	3
19	Chêne-7	78	2	2	7	71	3
16	Gruk-7	78	2	4	7	71	3
21	Anemone-7	85	3	3	7	71	3
20	Aubergine-7	78	2	3	7	71	3
\.


--
-- Data for Name: product_colors; Type: TABLE DATA; Schema: public; Owner: fanchovh
--

COPY public.product_colors (nbcolors, prixcolors, prixcolorsclient) FROM stdin;
0	0	0
1	1.25	5
2	2.5	8
3	3.75	12
\.


--
-- Data for Name: product_essences; Type: TABLE DATA; Schema: public; Owner: fanchovh
--

COPY public.product_essences (essence, prixessence, descessence, poidsessencem2, prixessenceclient) FROM stdin;
twin	10.82	desc twin	5.25	52.63
peuplier	9.147	desc peuplier	4.21	52.63
\.


--
-- Name: product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fanchovh
--

SELECT pg_catalog.setval('public.product_id_seq', 1, false);


--
-- Data for Name: product_modele; Type: TABLE DATA; Schema: public; Owner: fanchovh
--

COPY public.product_modele (cellules, coef, taillecellules, longueur, largeur) FROM stdin;
6	0.75	78	50	50
7	1	68	50	50
1	1	500	50	50
\.


--
-- Data for Name: product_packaging; Type: TABLE DATA; Schema: public; Owner: fanchovh
--

COPY public.product_packaging (fraisdeport, carton, papierbulle, dimensions, prix_carton) FROM stdin;
4	1	0.5	55x55x50	6.26
3	1	0.50	55x55x50	6.26
12	1	0.5	55x55x50	6.26
24	1	0.5	55x55x50	6.26
\.


--
-- Data for Name: product_performances; Type: TABLE DATA; Schema: public; Owner: fanchovh
--

COPY public.product_performances (type, frequence, classement, graph, desc_product, prof, surface, taillecellule, longueur, largeur, nbpieces, nbcarreaux, nbcellules) FROM stdin;
72	738-2150	3	[2,3,4,5 ,5 ,5 ,5 ,5 ,5 ,5 ,4 ,3 ,2 ,1 ,1, 1 ]	Le modèle 7 cellules avec une profondeur de 10cm est idéal pour un traitement esthetique passe-partout! 	15	1.45	68	50	50	16	49	7
61	1475-2150	2	[1,1,2,3 ,4 ,5 ,5 ,5 ,5 ,5 ,4 ,3 ,2 ,1 ,1, 1 ]	Le modèle standard	10	0.95	78	50	50	14	36	6
71	1475-2600	4	[1,1,2,3 ,4 ,5 ,5 ,5 ,5 ,5 ,5 ,3 ,2 ,1 ,1, 1 ]	Le modèle 7 cellules avec une profondeur de 20cm est idéal pour un traitement esthetique passe-partout! 	10	1.05	68	50	50	16	49	7
73	492-1755	5	[4,5,5,5 ,5 ,5 ,5 ,5 ,5 ,5 ,4 ,3 ,2 ,1 ,1, 1 ]	Le modèle 7 cellules avec une profondeur de 15cm est idéal pour un traitement esthetique passe-partout! 	20	1.85	68	50	50	16	49	7
716	1475-2600	4	[1,1,2,3 ,4 ,5 ,5 ,5 ,5 ,5 ,5 ,3 ,2 ,1 ,1, 1 ]	Le pack 6 diffuseurs de 7 cellules avec une profondeur de 20cm est idéal pour un traitement esthetique passe-partout! 	10	6.3	68	150	150	16	49	294
1	500-20000	5	[1,1,2,3 ,4 ,5 ,5 ,5 ,5 ,5 ,5 ,3 ,2 ,1 ,1, 1 ]	L'absorbeur Quadratik absorbe les fréquences médiums et aigües. Il se combine parfaitement avec les autres diffuseurs de la gamme Quadratik.	10	0.2	500	50	50	4	0	0
\.


--
-- Data for Name: product_prof; Type: TABLE DATA; Schema: public; Owner: fanchovh
--

COPY public.product_prof (profondeur, surface, performance) FROM stdin;
10	0.8	71
15	1.2	72
20	1.4	73
\.


--
-- Data for Name: promo; Type: TABLE DATA; Schema: public; Owner: fanchovh
--

COPY public.promo (code, reduction) FROM stdin;
AUDIO7	3
\.


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sessions (sid, sess, expired) FROM stdin;
leCIoG1hVlI6x18TKCFwmjFqZJudxZfh	{"cookie":{"originalMaxAge":1800000,"expires":"2018-11-23T19:58:43.375Z","httpOnly":true,"path":"/"}}	2018-11-23 20:58:43.375+01
GvKK1ucv3xE2mF1y5HO_VLEGibDAcmu6	{"cookie":{"originalMaxAge":1800000,"expires":"2018-11-23T20:00:23.966Z","httpOnly":true,"path":"/"}}	2018-11-23 21:00:23.966+01
embCTGqSIMSsV0TFCwS27kRE5V20z2LN	{"cookie":{"originalMaxAge":1800000,"expires":"2018-11-23T20:07:32.959Z","httpOnly":true,"path":"/"}}	2018-11-23 21:07:32.959+01
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: fanchovh
--

COPY public."user" (id, sessid, nom, prenom, adresse, ville, postal, mail, telephone, contexte) FROM stdin;
2	XhIyKHlU_2TMe5rXH4NAst0lbhDaSQQA	Cavellec	Fanch	Lieu dit La giraudais	La Mezière	35520	fanch44@hotmail.com	0631927481	homestudio
3	eFdTfrweS3L7iKmoxaMSUbvL3DkeF6Q0	Cavellec	Fanch	Lieu dit La giraudais	La Mezière	35520	fanch44@hotmail.com	0631927481	homestudio
4	kRXRDvj1H_JrygF6ZNDJtaE79DKLkqrf	Cavellec	Fanch	Lieu dit La giraudais	La Mezière	35520	fanch44@hotmail.com	0631927481	homestudio
5	ms5AsPKkqPWd8oWnJ5-vX-_Id3UuVMNr	g	sd	gsgsdg	qqqqqqqqf	35222	berna@g.fr	0624518574	homestudio
8	DkHDKwBMmTKlx2tf54NePW1wxxPq_62A	\N	\N	\N	\N	\N	\N	\N	\N
9	DkHDKwBMmTKlx2tf54NePW1wxxPq_62A	\N	\N	\N	\N	\N	\N	\N	\N
10	DkHDKwBMmTKlx2tf54NePW1wxxPq_62A	\N	\N	\N	\N	\N	\N	\N	\N
11	DkHDKwBMmTKlx2tf54NePW1wxxPq_62A	\N	\N	\N	\N	\N	\N	\N	\N
12	DkHDKwBMmTKlx2tf54NePW1wxxPq_62A	\N	\N	\N	\N	\N	\N	\N	\N
13	DkHDKwBMmTKlx2tf54NePW1wxxPq_62A	\N	\N	\N	\N	\N	\N	\N	\N
14	DkHDKwBMmTKlx2tf54NePW1wxxPq_62A	\N	\N	\N	\N	\N	\N	\N	\N
15	DkHDKwBMmTKlx2tf54NePW1wxxPq_62A	\N	\N	\N	\N	\N	\N	\N	\N
16	DkHDKwBMmTKlx2tf54NePW1wxxPq_62A	\N	\N	\N	\N	\N	\N	\N	\N
17	DkHDKwBMmTKlx2tf54NePW1wxxPq_62A	\N	\N	\N	\N	\N	\N	\N	\N
18	DkHDKwBMmTKlx2tf54NePW1wxxPq_62A	\N	\N	\N	\N	\N	\N	\N	\N
19	DkHDKwBMmTKlx2tf54NePW1wxxPq_62A	\N	\N	\N	\N	\N	\N	\N	\N
20	B1QwrQxauAkZCuQxTCbELgPx9sNNkujS	\N	\N	\N	\N	\N	\N	\N	\N
21	B1QwrQxauAkZCuQxTCbELgPx9sNNkujS	\N	\N	\N	\N	\N	\N	\N	\N
22	B1QwrQxauAkZCuQxTCbELgPx9sNNkujS	\N	\N	\N	\N	\N	\N	\N	\N
23	B1QwrQxauAkZCuQxTCbELgPx9sNNkujS	\N	\N	\N	\N	\N	\N	\N	\N
24	B1QwrQxauAkZCuQxTCbELgPx9sNNkujS	\N	\N	\N	\N	\N	\N	\N	\N
25	B1QwrQxauAkZCuQxTCbELgPx9sNNkujS	Cavellec	Fanch	Lieu dit La giraudais	La Mezière	35520	fanch44@hotmail.com	0631927481	
26	wxjke2PSX_uJY0hzWUqCOhgmsvNo8Ac8	Cavellec	Fanch	Lieu dit La giraudais	La Mezière	35520	fanch44@hotmail.com	0631927481	
27	92-pCoE4PrNPfSIYq2t6fNY4jG2qHIzp	Cavellec	Fanch	Lieu dit La giraudais	La Mezière	35520	fanch44@hotmail.com	0631927481	homecinema
28	92-pCoE4PrNPfSIYq2t6fNY4jG2qHIzp	Cavellec	fhg	fgj	fgj	35420	fanch44@hotmail.com	0632514875	studiopro
29	92-pCoE4PrNPfSIYq2t6fNY4jG2qHIzp	gh	fh	fgh	Paris	35212	huhu@fg.fr	0631927481	homecinema
30	92-pCoE4PrNPfSIYq2t6fNY4jG2qHIzp	gfgdfg	qfg	fg	fgj	35520	ddd@hu.fr	0631927481	studiopro
31	92-pCoE4PrNPfSIYq2t6fNY4jG2qHIzp	\N	\N	\N	\N	\N	\N	\N	\N
32	92-pCoE4PrNPfSIYq2t6fNY4jG2qHIzp	essai	fhg	fgj	fgj	35420	ddd@hu.fr	+33631927481	homestudio
33	92-pCoE4PrNPfSIYq2t6fNY4jG2qHIzp	essai	fhg	fgj	ddd	35420	ddd@hu.fr	0625481454	homecinema
34	92-pCoE4PrNPfSIYq2t6fNY4jG2qHIzp	fd	dffs	fgj	fgj	35420	ddd@hu.fr	0631927481	homestudio
35	M7bjjXnJh4RtCe9u0BSsCwLl_tmnzh8o	\N	\N	\N	\N	\N	\N	\N	\N
36	M7bjjXnJh4RtCe9u0BSsCwLl_tmnzh8o	\N	\N	\N	\N	\N	\N	\N	\N
37	M7bjjXnJh4RtCe9u0BSsCwLl_tmnzh8o	\N	\N	\N	\N	\N	\N	\N	\N
38	2a5WBVFFsAx27yC-5TnV57dQPI3T1kZ_	Cavellec	Fanch	Lieu dit La giraudais	La Mezière	35520	fanch44@hotmail.com	0631927481	homecinema
39	2a5WBVFFsAx27yC-5TnV57dQPI3T1kZ_	g	fhg	fgj	ddd	35500	ddd@hu.fr	0631927481	studiopro
40	2a5WBVFFsAx27yC-5TnV57dQPI3T1kZ_	Fa	Fanch	ddd	fgj	35500	ddd@hu.fr	0631927481	studiopro
41	2a5WBVFFsAx27yC-5TnV57dQPI3T1kZ_	essai	fhg	ddd	fgj	35520	ddd@hu.fr	+33631927481	homecinema
42	2a5WBVFFsAx27yC-5TnV57dQPI3T1kZ_	essai	fhg	fgj	ddd	35520	ddd@hu.fr	0631927481	homestudio
43	2a5WBVFFsAx27yC-5TnV57dQPI3T1kZ_	\N	\N	\N	\N	\N	\N	\N	\N
44	2a5WBVFFsAx27yC-5TnV57dQPI3T1kZ_	essai	fhg	ddd	ddd	35500	fanch44@hotmail.com	0631927481	homestudio
45	2ZAOPKPBgV5NWkAjSFne7i3IV4eWNoPW	\N	\N	\N	\N	\N	\N	\N	\N
46	2ZAOPKPBgV5NWkAjSFne7i3IV4eWNoPW	\N	\N	\N	\N	\N	\N	\N	\N
47	2ZAOPKPBgV5NWkAjSFne7i3IV4eWNoPW	essai	dffs	ddd	fgj	35420	ddd@hu.fr	0631927481	autre
48	2ZAOPKPBgV5NWkAjSFne7i3IV4eWNoPW	\N	\N	\N	\N	\N	\N	\N	\N
49	2ZAOPKPBgV5NWkAjSFne7i3IV4eWNoPW	\N	\N	\N	\N	\N	\N	\N	\N
50	2ZAOPKPBgV5NWkAjSFne7i3IV4eWNoPW	\N	\N	\N	\N	\N	\N	\N	\N
51	2ZAOPKPBgV5NWkAjSFne7i3IV4eWNoPW	essai	fhg	ddd	ddd	35520	fanch44@hotmail.com	0631927481	studiopro
52	VTT-mcaLzQexkfbrhC5f-BKvD7NzdzXJ	\N	\N	\N	\N	\N	\N	\N	\N
53	8w14FB6aT9K8Mwg2_yRBcHwf9t24_NTP	\N	\N	\N	\N	\N	\N	\N	\N
54	8w14FB6aT9K8Mwg2_yRBcHwf9t24_NTP	\N	\N	\N	\N	\N	\N	\N	\N
55	cmLKq2fT2nmG3c8xofUiu1H6qdLcJ_GM	\N	\N	\N	\N	\N	\N	\N	\N
56	cmLKq2fT2nmG3c8xofUiu1H6qdLcJ_GM	\N	\N	\N	\N	\N	\N	\N	\N
57	cmLKq2fT2nmG3c8xofUiu1H6qdLcJ_GM	\N	\N	\N	\N	\N	\N	\N	\N
58	t8udfDynH-VGTI7ZbarlQQoS0nd8spbE	\N	\N	\N	\N	\N	\N	\N	\N
59	t8udfDynH-VGTI7ZbarlQQoS0nd8spbE	\N	\N	\N	\N	\N	\N	\N	\N
60	t8udfDynH-VGTI7ZbarlQQoS0nd8spbE	\N	\N	\N	\N	\N	\N	\N	\N
61	t8udfDynH-VGTI7ZbarlQQoS0nd8spbE	\N	\N	\N	\N	\N	\N	\N	\N
62	t8udfDynH-VGTI7ZbarlQQoS0nd8spbE	\N	\N	\N	\N	\N	\N	\N	\N
63	t8udfDynH-VGTI7ZbarlQQoS0nd8spbE	\N	\N	\N	\N	\N	\N	\N	\N
64	LAKvXMtNUgMPHaEQJ9Sx6R7KM3SIEf9b	\N	\N	\N	\N	\N	\N	\N	\N
65	HgTVEYZA6KNMTxHtyCbc1WR2hnOxoa1j	\N	\N	\N	\N	\N	\N	\N	\N
66	HgTVEYZA6KNMTxHtyCbc1WR2hnOxoa1j	\N	\N	\N	\N	\N	\N	\N	\N
67	Z9Lm1jZARr3XedwVl5FwyV1cAyw_dAbg	Cavellec	fhg	fgj	fgj	35420	fanch44@hotmail.com	0631927481	homestudio
68	7LxSVFEVhlHqSiPNX622ZZu8cNzKFDXf	Cavellec	Fanch	Lieu dit La giraudais	La Mezière	35520	fanch44@hotmail.com	0631927481	homestudio
69	ZEdmgef5gmNoZxQi79B4tShVCJsPYSNq	\N	\N	\N	\N	\N	\N	\N	\N
70	ecctNXrIO73aObBwzR7XxxBoaD-GXxnr	CARDUCCIO 	Vincenzo	32 rue des fleurs	Petite Rosselle	57540	accordeonvincenzo@gmail.com	0685553042	homestudio
71	ecctNXrIO73aObBwzR7XxxBoaD-GXxnr	\N	\N	\N	\N	\N	\N	\N	\N
72	rYWohSMFxk4kcp9JJfISF4218HwQycX2	Carduccio 	Vincenzo 	32 rue des fleurs	Petite Rosselle	57540	accordeonvincenzo@gmail.com	0685553042	homestudio
73	H-3ZCP428D6e99Pmoa-PxKCNhJNzgL_F	Carduccio 	Vincenzo 	32 rue des fleurs 	Petite Rosselle 	57540	accordeonvincenzo@gmail.com	0685553042	homestudio
74	AzWCYK9lEgkg3w9vBpQZswwXAjH64qEl	\N	\N	\N	\N	\N	\N	\N	\N
75	AzWCYK9lEgkg3w9vBpQZswwXAjH64qEl	\N	\N	\N	\N	\N	\N	\N	\N
76	AzWCYK9lEgkg3w9vBpQZswwXAjH64qEl	\N	\N	\N	\N	\N	\N	\N	\N
77	AzWCYK9lEgkg3w9vBpQZswwXAjH64qEl	\N	\N	\N	\N	\N	\N	\N	\N
78	AzWCYK9lEgkg3w9vBpQZswwXAjH64qEl	\N	\N	\N	\N	\N	\N	\N	\N
79	AzWCYK9lEgkg3w9vBpQZswwXAjH64qEl	\N	\N	\N	\N	\N	\N	\N	\N
80	AzWCYK9lEgkg3w9vBpQZswwXAjH64qEl	\N	\N	\N	\N	\N	\N	\N	\N
81	AzWCYK9lEgkg3w9vBpQZswwXAjH64qEl	\N	\N	\N	\N	\N	\N	\N	\N
82	AzWCYK9lEgkg3w9vBpQZswwXAjH64qEl	\N	\N	\N	\N	\N	\N	\N	\N
83	AzWCYK9lEgkg3w9vBpQZswwXAjH64qEl	\N	\N	\N	\N	\N	\N	\N	\N
84	AzWCYK9lEgkg3w9vBpQZswwXAjH64qEl	\N	\N	\N	\N	\N	\N	\N	\N
85	AzWCYK9lEgkg3w9vBpQZswwXAjH64qEl	\N	\N	\N	\N	\N	\N	\N	\N
86	AzWCYK9lEgkg3w9vBpQZswwXAjH64qEl	\N	\N	\N	\N	\N	\N	\N	\N
87	AzWCYK9lEgkg3w9vBpQZswwXAjH64qEl	\N	\N	\N	\N	\N	\N	\N	\N
88	AzWCYK9lEgkg3w9vBpQZswwXAjH64qEl	Cavellec	Fanch	22 rue des camelias	Paris	35520	aiaia@gmail.com	0631958274	homestudio
89	AzWCYK9lEgkg3w9vBpQZswwXAjH64qEl	Dada	ok	huhu	huhu	35542	gugu@jim.com	0631859274	homestudio
90	AzWCYK9lEgkg3w9vBpQZswwXAjH64qEl	Cavelle	hbuh	h	jhv	35240	gugu@jim.com	0632528475	homestudio
91	R-dlrW-qIaxPn69GNsDkRWnYFx_gS69Y	uhuhu	huhu	nlknl	lkn	92512	h@gu.fr	0652857485	homestudio
92	KAMjMadO0A-xuPdYBNapfJb3fuaXQYsT	\N	\N	\N	\N	\N	\N	\N	\N
\.


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fanchovh
--

SELECT pg_catalog.setval('public.user_id_seq', 92, true);


--
-- Name: admin admin_pk; Type: CONSTRAINT; Schema: public; Owner: fanchovh
--

ALTER TABLE ONLY public.admin
    ADD CONSTRAINT admin_pk PRIMARY KEY (id);


--
-- Name: cart cart_pk; Type: CONSTRAINT; Schema: public; Owner: fanchovh
--

ALTER TABLE ONLY public.cart
    ADD CONSTRAINT cart_pk PRIMARY KEY (id);


--
-- Name: collection collection_pk; Type: CONSTRAINT; Schema: public; Owner: fanchovh
--

ALTER TABLE ONLY public.collection
    ADD CONSTRAINT collection_pk PRIMARY KEY (id);


--
-- Name: commande commande_pk; Type: CONSTRAINT; Schema: public; Owner: fanchovh
--

ALTER TABLE ONLY public.commande
    ADD CONSTRAINT commande_pk PRIMARY KEY (id);


--
-- Name: livraison livraison_pk; Type: CONSTRAINT; Schema: public; Owner: fanchovh
--

ALTER TABLE ONLY public.livraison
    ADD CONSTRAINT livraison_pk PRIMARY KEY (id);


--
-- Name: product_performances modele_type_pk; Type: CONSTRAINT; Schema: public; Owner: fanchovh
--

ALTER TABLE ONLY public.product_performances
    ADD CONSTRAINT modele_type_pk PRIMARY KEY (type);


--
-- Name: product_colors product_colors_nbcolors_pk; Type: CONSTRAINT; Schema: public; Owner: fanchovh
--

ALTER TABLE ONLY public.product_colors
    ADD CONSTRAINT product_colors_nbcolors_pk PRIMARY KEY (nbcolors);


--
-- Name: product_modele product_modele_cellules_pk; Type: CONSTRAINT; Schema: public; Owner: fanchovh
--

ALTER TABLE ONLY public.product_modele
    ADD CONSTRAINT product_modele_cellules_pk PRIMARY KEY (cellules);


--
-- Name: product_packaging product_packaging_fraisdeport_pk; Type: CONSTRAINT; Schema: public; Owner: fanchovh
--

ALTER TABLE ONLY public.product_packaging
    ADD CONSTRAINT product_packaging_fraisdeport_pk PRIMARY KEY (fraisdeport);


--
-- Name: product product_pk; Type: CONSTRAINT; Schema: public; Owner: fanchovh
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pk PRIMARY KEY (id);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (sid);


--
-- Name: user user_pk; Type: CONSTRAINT; Schema: public; Owner: fanchovh
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pk PRIMARY KEY (id);


--
-- Name: fki_collection_fk; Type: INDEX; Schema: public; Owner: fanchovh
--

CREATE INDEX fki_collection_fk ON public.product USING btree ("collectionId");


--
-- Name: product_modele_cellules_uindex; Type: INDEX; Schema: public; Owner: fanchovh
--

CREATE UNIQUE INDEX product_modele_cellules_uindex ON public.product_modele USING btree (cellules);


--
-- Name: product_packaging_fraisdeport_uindex; Type: INDEX; Schema: public; Owner: fanchovh
--

CREATE UNIQUE INDEX product_packaging_fraisdeport_uindex ON public.product_packaging USING btree (fraisdeport);


--
-- Name: sessions_expired_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX sessions_expired_index ON public.sessions USING btree (expired);


--
-- Name: admin admin_user_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: fanchovh
--

ALTER TABLE ONLY public.admin
    ADD CONSTRAINT admin_user_id_fk FOREIGN KEY (userid) REFERENCES public."user"(id);


--
-- Name: cart cart_user_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: fanchovh
--

ALTER TABLE ONLY public.cart
    ADD CONSTRAINT cart_user_id_fk FOREIGN KEY (userid) REFERENCES public."user"(id);


--
-- Name: product collection_fk; Type: FK CONSTRAINT; Schema: public; Owner: fanchovh
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT collection_fk FOREIGN KEY ("collectionId") REFERENCES public.collection(id);


--
-- Name: commande commande_user_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: fanchovh
--

ALTER TABLE ONLY public.commande
    ADD CONSTRAINT commande_user_id_fk FOREIGN KEY (userid) REFERENCES public."user"(id);


--
-- Name: livraison livraison_user_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: fanchovh
--

ALTER TABLE ONLY public.livraison
    ADD CONSTRAINT livraison_user_id_fk FOREIGN KEY (userid) REFERENCES public."user"(id);


--
-- Name: product product_product_colors_nbcolors_fk; Type: FK CONSTRAINT; Schema: public; Owner: fanchovh
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_product_colors_nbcolors_fk FOREIGN KEY ("nbColors") REFERENCES public.product_colors(nbcolors);


--
-- Name: product product_product_modele_cellules_fk; Type: FK CONSTRAINT; Schema: public; Owner: fanchovh
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_product_modele_cellules_fk FOREIGN KEY (modele) REFERENCES public.product_modele(cellules);


--
-- Name: product product_product_packaging_fraisdeport_fk; Type: FK CONSTRAINT; Schema: public; Owner: fanchovh
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_product_packaging_fraisdeport_fk FOREIGN KEY (packaging) REFERENCES public.product_packaging(fraisdeport);


--
-- Name: product product_product_performances_type_fk; Type: FK CONSTRAINT; Schema: public; Owner: fanchovh
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_product_performances_type_fk FOREIGN KEY (performance) REFERENCES public.product_performances(type);


--
-- Name: product_prof product_prof_product_performances_type_fk; Type: FK CONSTRAINT; Schema: public; Owner: fanchovh
--

ALTER TABLE ONLY public.product_prof
    ADD CONSTRAINT product_prof_product_performances_type_fk FOREIGN KEY (performance) REFERENCES public.product_performances(type);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: fanchovh
--

REVOKE ALL ON SCHEMA public FROM postgres;
REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO fanchovh;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

