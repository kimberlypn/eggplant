defmodule EggplantWeb.PageController do
  use EggplantWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
