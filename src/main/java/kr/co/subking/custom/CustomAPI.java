package kr.co.subking.custom;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;

import com.fasterxml.jackson.databind.json.JsonMapper;

import kr.co.subking.ingredients.Ingredients;
import kr.co.subking.ingredients.IngredientsService;
import kr.co.subking.ingredients.IngredientsServiceImpl;
import subking.config.WebUtil;

@WebServlet("/api/v1/custom")
public class CustomAPI extends HttpServlet {
	private IngredientsService service = IngredientsServiceImpl.getInstance();
	private CustomService customService = CustomServiceImpl.getInstance();

	// private List<Ingredients> ig = new ArrayList<Ingredients>();

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		List<Ingredients> list = service.selectAll();

		resp.setHeader("Content-Type", "application/json; charset=utf-8");
		JsonMapper jsonMapper = new JsonMapper();
		String json = jsonMapper.writeValueAsString(list);
		PrintWriter pw = resp.getWriter();
		pw.print(json);
		pw.flush();
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		WebUtil webUtil = new WebUtil();
		String json = webUtil.readBody(req);

		JSONArray jsonArr = new JSONArray(json);

		List<Integer> list = new ArrayList<Integer>();

		for (int i = 0; i < jsonArr.length(); i++) {
			list.add(jsonArr.getInt(i));
		}
		customService.insertcart(list);
	}
}
