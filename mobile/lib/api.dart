import 'package:http/http.dart' as http;
import 'dart:convert';
import 'model/video.dart';

const CHAVE_YOUTUBE_API = "AIzaSyDo63vu1g76pK5KyZOamTMDFXJSODKymrg";
const ID_CANAL = "UC48rkTlXjRd6pnqqBkdV0Mw";
const URL_BASE = "https://www.googleapis.com/youtube/v3/";

class Api {
  //Faz uma requisição http e retorna os dados em uma lista de Videos
  Future<List<Video>> pesquisar(String pesquisa) async {
    http.Response response = await http.get(URL_BASE +
        "search"
            "?part=snippet"
            "&type=video"
            "&maxResults=20"
            "&order=date"
            "&key=$CHAVE_YOUTUBE_API"
            "&channelId=$ID_CANAL"
            "&q=$pesquisa");
    Map<String, dynamic> dadosJson = json.decode(response.body);

    List<Video> videos = dadosJson["items"].map<Video>((map) {
      return Video.fromJson(map);
    }).toList();

    return videos;
  }
}
